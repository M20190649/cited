<template>
  <div>
    <v-toolbar flat>
      <v-app-bar-nav-icon @click="back">
        <v-icon>mdi-arrow-left</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title>{{ collTitle }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y min-width="8em">
        <template v-slot:activator="{ on }">
          <v-btn text icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="exportCollection">
            <v-list-item-title>Export</v-list-item-title>
          </v-list-item>
          <v-list-item @click="deleteCollection">
            <v-list-item-title>Delete</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-list three-line>
      <v-card flat tile>
        <v-card-text class="body-2">
          <expandable-text :text="collDescription"
            :textLimit="descriptionLimit">
          </expandable-text>
        </v-card-text>
      </v-card>
      <pv-drawer-article-list-tile v-for="art in collArts" :key="art.artHash"
        :art="art" @click="onClickArticle(art.artHash)">
      </pv-drawer-article-list-tile>
    </v-list>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ExpandableText from '@/components/ExpandableText.vue'
import PvDrawerArticleListTile from '@/components/PvDrawerArticleListTile.vue'
import * as firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  name: 'PvDrawerCollectionView',
  components: { ExpandableText, PvDrawerArticleListTile },
  data: () => ({
    descriptionLimit: 200
  }),
  computed: {
    ...mapState('parseVis', [ 'currCollId', 'currColl', 'collVisGraph' ]),
    coll () {
      return this.currColl
    },
    collTitle () {
      return this.coll && this.coll.title
    },
    collDescription () {
      return this.coll && this.coll.description
    },
    collArts () {
      return this.coll && this.coll.articles
    }
  },
  methods: {
    back () {
      this.$router.push(`/coll/${this.currCollId}/list`)
    },
    async deleteCollection () {
      if (!confirm('Are you sure you want to delete the collection?')) {
        return
      }
      try {
        await firebase.firestore().doc(`collection/${this.currCollId}`).delete()
      } catch (err) {
        console.log('Error removing collection:', err)
      }
      this.$router.push('/')
    },
    exportCollection () {
      const output = this.coll
      const data = JSON.stringify(output, null, 2)
      const blob = new Blob([ data ], { type: 'text/plain' })
      const e = document.createEvent('MouseEvents')
      let a = document.createElement('a')
      a.download = `${output.collId}.json`
      a.href = window.URL.createObjectURL(blob)
      a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
      e.initEvent(
        'click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false,
        0, null)
      a.dispatchEvent(e)
    },
    onClickArticle (artId) {
      this.$router.push(`/coll/${this.currCollId}/${artId}`)
    }
  }
}
</script>