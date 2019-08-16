webpackJsonp([8],{"2dbZ":function(t,e){},aZa8:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Gu7T"),a=r.n(n),i=r("//Fk"),s=r.n(i),c=r("Xxa5"),u=r.n(c),o=r("exGp"),l=r.n(o),h=r("Dd8w"),f=r.n(h),d=r("M4fF"),v=r.n(d),p=r("yviF"),b=(r("881v"),r("NYxO")),y=r("6iLG"),w={name:"PvDrawerRelativeListView",components:{PvDrawerArticleListTile:r("kUa0").a},props:{relationProp:String},data:function(){return{relatives:null}},computed:f()({},Object(b.b)("parseVis",["currCollId","currVisGraph","currArtId","currArt"]),{art:function(){return this.currArt||this.visGraph.getArt(this.currArtId)},artLabel:function(){return this.firstAuthorSurname+" "+this.year},authors:function(){return this.art?this.art.authors:[]},firstAuthorSurname:function(){return this.art&&this.art.authors&&this.art.authors[0]&&this.art.authors[0].surname},isLoading:function(){return null===this.relatives},nCitedBys:function(){return this.art&&this.art.nCitedBys&&this.art.nCitedBy},nReferences:function(){return this.art&&this.art.nReferences&&this.art.nReference},title:function(){return this.art&&this.art.title},titleText:function(){return"references"===this.relationProp?'References of "'+this.title+'"':'"'+this.title+'" is cited by'},visGraph:function(){return this.currVisGraph||new y.a},year:function(){return this.art&&this.art.year}}),watch:{art:{immediate:!0,handler:function(){var t=this;return l()(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.relatives=null,"references"!==t.relationProp){e.next=7;break}return e.next=4,t.fetchReferences();case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,t.fetchCitedBys();case 9:e.t0=e.sent;case 10:t.relatives=e.t0;case 11:case"end":return e.stop()}},e,t)}))()}}},methods:{back:function(){this.$router.push("/coll/"+this.currCollId+"/"+this.currArtId)},fetchCitedBys:function(){var t=this;return l()(u.a.mark(function e(){var r,n,i,c,o,h,d;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.firestore().doc("citedBys/"+t.currArtId).get();case 2:return r=e.sent,n=r.exists?r.data().artHashes:[],e.next=6,s.a.all(v.a.map(n,function(){var e=l()(u.a.mark(function e(r){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.firestore().doc("artMetas/"+r).get();case 2:return n=t.sent,t.abrupt("return",f()({},n.data(),{artHash:n.id,isMeta:!0}));case 4:case"end":return t.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}()));case 6:return i=e.sent,c=t.art.citedBys||[],o=t.visGraph.getInGraphCitedByIds(t.currArtId),h=v.a.map(o,function(e){return t.visGraph.getArt(e)}),d=v.a.uniqBy([].concat(a()(i),a()(c),a()(h)),function(t){return t.artHash}),e.abrupt("return",d);case 12:case"end":return e.stop()}},e,t)}))()},fetchReferences:function(){var t=this;return l()(u.a.mark(function e(){var r,n,i,c,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.art.referenceArtHashes){e.next=3;break}return r=s.a.all(v.a.map(t.art.referenceArtHashes,function(){var e=l()(u.a.mark(function e(r){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.firestore().doc("/artMetas/"+r).get(),t.abrupt("return",n.data());case 2:case"end":return t.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}())),e.abrupt("return",v.a.filter(r));case 3:return n=t.art.references||[],i=t.visGraph.getInGraphReferenceIds(t.art.artHash),c=v.a.map(i,function(e){return t.visGraph.getArt(e)}),o=v.a.uniqBy([].concat(a()(n),a()(c)),function(t){return t.artHash}),e.abrupt("return",o);case 8:case"end":return e.stop()}},e,t)}))()},onClickArticle:function(t){this.$router.push("/coll/"+this.currCollId+"/"+t)},trace:function(t){return console.log(t),t}}},m={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-toolbar",{attrs:{flat:"",color:"white"}},[r("v-toolbar-side-icon",{on:{click:t.back}},[r("v-icon",[t._v("arrow_back")])],1),t._v(" "),r("v-toolbar-title",[t._v(t._s(t.artLabel))])],1),t._v(" "),r("v-list",{attrs:{"three-line":""}},[r("v-card",{attrs:{flat:"",tile:""}},[r("v-card-text",{staticClass:"body-2 font-weight-bold"},[t._v("\n        "+t._s(t.titleText)+"\n      ")])],1),t._v(" "),t.isLoading?r("v-progress-circular",{staticClass:"ma-4",staticStyle:{width:"100%"},attrs:{indeterminate:""}}):t._l(t.relatives,function(e){return r("pv-drawer-article-list-tile",{key:e.artHash,staticClass:"my-3",attrs:{art:e},on:{click:function(r){return t.onClickArticle(e.artHash)}}})})],2)],1)},staticRenderFns:[]},x=r("VU/8")(w,m,!1,null,null,null);e.default=x.exports},kUa0:function(t,e,r){"use strict";var n=r("tsiK"),a=r("/Fzg"),i=r("YOzM"),s=Object(n.a)(function(t){return t.art.artHash}),c={name:"PvDrawerArticleListTile",components:{PvDrawerArticleStatsRow:i.a},mixins:[s,a.a],props:{art:Object},data:function(){return{sideWidth:"8px"}},computed:{leftSideStyle:function(){return{position:"absolute",width:this.sideWidth,height:"100%",left:"0px",background:this.collReferenceColor}},rightSideStyle:function(){return{position:"absolute",width:this.sideWidth,height:"100%",right:"0px",background:this.collCitedByColor}}}},u={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-list-tile",t._g({nativeOn:{pointerenter:function(e){return t.onMouseEnter(e)},pointerleave:function(e){return t.onMouseLeave(e)}}},t.$listeners),[r("div",{style:t.leftSideStyle}),t._v(" "),r("v-list-tile-content",{staticStyle:{"justify-content":"space-evenly"}},[r("div",{staticClass:"caption text-truncate font-weight-bold"},[t._v(t._s(t.label))]),t._v(" "),r("div",{staticClass:"body-1 text-truncate font-weight-medium full-width"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),r("div",{staticClass:"caption text-truncate font-weight-light full-width"},[t._v("\n      "+t._s(t.abstract)+"\n    ")]),t._v(" "),r("pv-drawer-article-stats-row",{staticClass:"caption font-weight-thin",attrs:{venue:t.venue,year:t.year,nReferences:t.nReferences,nCitedBys:t.nCitedBys}})],1),t._v(" "),r("div",{style:t.rightSideStyle})],1)},staticRenderFns:[]};var o=r("VU/8")(c,u,!1,function(t){r("2dbZ")},"data-v-179a5ebb",null);e.a=o.exports}});
//# sourceMappingURL=8.306f5bb8cd49d2dea11f.js.map