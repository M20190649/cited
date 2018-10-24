import _ from 'lodash'
import { Paper } from './paper.js'

const nodeOptTemplate = {
  inGraphCitings: [],
  inGraphCitedBys: [],
  isSelected: false,
  geometry: { height: 0, headerHeight: 0 }
}

export class Relation {
  constructor (citing, citedBy) {
    this.citing = citing
    this.citedBy = citedBy
  }
}

export class Node {
  constructor (paper, nodeOpt = nodeOptTemplate) {
    // TODO: validate the arguments
    this.paper = paper
    const opt = { ...nodeOptTemplate, ...nodeOpt }
    this.inGraphCitings = opt.inGraphCitings
    this.inGraphCitedBys = opt.inGraphCitedBys
    this.geometry = opt.geometry
  }
}

export class Graph {
  constructor (nodes) {
    // TODO: validate the arguments
    this.nodes = nodes
  }

  static fromTestJson ({ papers: testPapers, relations }) {
    const papers =
      _.map(
        testPapers, (testPaper, index) => Paper.fromTestJson(testPaper, index))
    const nodes = _.map(papers, paper => new Node(paper))
    _.forEach(relations, relation => {
      nodes[relation.citing].inGraphCitedBys =
        _.union(nodes[relation.citing].inGraphCitedBys, [relation.citedBy])
      nodes[relation.citedBy].inGraphCitings =
        _.union(nodes[relation.citedBy].inGraphCitings, [relation.citing])
    })
    _.forEach(nodes, node => {
      node.paper.citings =
        _.map(node.inGraphCitings, index => ({ doi: index }))
    })
    return new Graph(nodes)
  }

  static fromPapers (papers) {
    const inGraphRelations = this.computeInCollectionRelations(papers)
    const nodes = []
    for (let i = 0; i < papers.length; ++i) {
      const paper = papers[i]
      const inGraphCitings = inGraphRelations[i].citings
      const inGraphCitedBys = inGraphRelations[i].citedBys
      nodes[i] = new Node(paper, {
        inGraphCitings: inGraphCitings,
        inGraphCitedBys: inGraphCitedBys
      })
    }
    return new Graph(nodes)
  }

  static computeInCollectionRelations (papers) {
    return _.map(papers, paper => {
      return this.computeRelationToCollection(paper, papers)
    })
  }

  static computeRelationToCollection (paper, papers) {
    const relation = {
      citings: [],
      citedBys: []

    }
    // citings
    const refDois = _.map(paper.references, ref => ref.doi)
    const inCollectionCitings = _.map(refDois, doi => {
      if (doi === undefined) {
        return null
      }
      return papers.findIndex(paper => doi === paper.doi)
    })
    relation.citings = inCollectionCitings.filter(value => {
      return value !== undefined && value !== null && value !== -1
    })
    // citedBys
    _.forEach(papers, (eachPaper, eachPaperId) => {
      const refDois = _.map(eachPaper.references, ref => ref.doi)
      if (refDois.includes(paper.doi)) {
        relation.citedBys.push(eachPaperId)
      }
    })
    return relation
  }

  insert (paper) {
    if (this.includes(paper)) {
      throw new Error(`cannot insert duplicated paper: ${paper}`)
    }
    const relation = Graph.computeRelationToCollection(
      paper, _.map(this.nodes, node => node.paper))
    const newIndex = this.nodes.length
    _.forEach(relation.citings, index => {
      this.nodes[index].inGraphCitedBys.push(newIndex)
    })
    _.forEach(relation.citedBys, index => {
      this.nodes[index].inGraphCitings.push(newIndex)
    })
    const node = new Node(paper, {
      inGraphCitings: relation.citings,
      inGraphCitedBys: relation.citedBys
    })
    this.nodes.push(node)
    return node
  }

  includes (arg) {
    if (arg instanceof Paper) {
      const paper = arg
      return _.includes(this.dois, paper.doi)
    }
    if (arg instanceof Node) {
      const node = arg
      return _.includes(this.nodes, node)
    }
    throw new Error(`wrong input type: ${arg}`)
  }

  get dois () {
    return _.map(this.nodes, node => node.paper.doi)
  }

  get isAnyNodeSelected () {
    return this.nodes.find(node => node.selected) !== undefined
  }

  get selectedNodes () {
    return this.nodes.filter(node => node.selected)
  }

  get relations () {
    return _.flatten(_.map(this.nodes, (node, index) => {
      const citings = node.inGraphCitings
      return _.map(citings, citing => new Relation(citing, index))
    }))
  }

  toggleSelectedByIndex (index) {
    this.nodes[index].selected = !this.nodes[index].selected
  }

  getUnionRelations (citings, citedBys) {
    return _.filter(this.relations, relation => _.includes(citings, relation.citing) || _.includes(citedBys, relation.citedBy))
  }

  deselectAllNodes () {
    _.forEach(this.nodes, node => {
      node.selected = false
    })
  }

  clear () {
    this.nodes = []
  }

  remove (index) {
    const nodes = this.nodes
    const node = nodes[index]
    _.forEach(node.inGraphCitings, citing => {
      _.pull(nodes[citing].inGraphCitedBys, index)
    })
    _.forEach(node.inGraphCitedBys, citedBy => {
      _.pull(nodes[citedBy].inGraphCitings, index)
    })
    _.forEach(nodes, node => {
      node.inGraphCitings = _.map(node.inGraphCitings, citing => {
        return citing > index ? citing - 1 : citing
      })
      node.inGraphCitedBys = _.map(node.inGraphCitedBys, citedBy => {
        return citedBy > index ? citedBy - 1 : citedBy
      })
    })
    _.pull(nodes, node)
  }
}
