webpackJsonp([6],{"2dbZ":function(t,e){},VaRf:function(t,e){},ielE:function(t,e,i){"use strict";var n={name:"ExpandableText",props:{text:String,textLimit:Number},data:function(){return{isExpanded:!1}},methods:{expand:function(){this.isExpanded=!0},shrink:function(){this.isExpanded=!1}},computed:{isFullTextShown:function(){return this.isExpanded||this.isTextShortEnough},isTextShortEnough:function(){return(this.text||"").length<=this.textLimit},computedText:function(){var t=this.text||"";return this.isExpanded?t:t.slice(0,this.textLimit)}},watch:{text:function(){this.isExpanded=!1}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("span",[t._v(t._s(t.computedText))]),t._v(" "),t.isFullTextShown?t._e():i("span",[t._v("...")]),t._v(" "),t.isTextShortEnough||t.isExpanded?t._e():i("a",{on:{click:t.expand}},[t._v("\n    CONTINUE READING\n  ")]),t._v(" "),i("a",{directives:[{name:"show",rawName:"v-show",value:!t.isTextShortEnough&&t.isExpanded,expression:"!isTextShortEnough && isExpanded"}],on:{click:t.shrink}},[t._v("SHOW LESS")])])},staticRenderFns:[]};var o=i("VU/8")(n,r,!1,function(t){i("VaRf")},"data-v-6f059715",null);e.a=o.exports},iqpA:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("mvHQ"),r=i.n(n),o=i("Xxa5"),l=i.n(o),s=i("exGp"),c=i.n(s),a=i("Dd8w"),u=i.n(a),d=i("NYxO"),v=i("ielE"),h=i("kUa0"),p=i("yviF"),f=(i("881v"),{name:"PvDrawerCollectionView",components:{ExpandableText:v.a,PvDrawerArticleListTile:h.a},data:function(){return{descriptionLimit:200}},computed:u()({},Object(d.b)("parseVis",["currCollId","currColl","collVisGraph"]),{coll:function(){return this.currColl},collTitle:function(){return this.coll&&this.coll.title},collDescription:function(){return this.coll&&this.coll.description},collArts:function(){return this.coll&&this.coll.articles}}),methods:{back:function(){this.$router.push("/coll/"+this.currCollId+"/list")},deleteCollection:function(){var t=this;return c()(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(confirm("Are you sure you want to delete the collection?")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,p.firestore().doc("collection/"+t.currCollId).delete();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log("Error removing collection:",e.t0);case 10:t.$router.push("/");case 11:case"end":return e.stop()}},e,t,[[2,7]])}))()},exportCollection:function(){var t=this.coll,e=r()(t,null,2),i=new Blob([e],{type:"text/plain"}),n=document.createEvent("MouseEvents"),o=document.createElement("a");o.download=t.collId+".json",o.href=window.URL.createObjectURL(i),o.dataset.downloadurl=["text/json",o.download,o.href].join(":"),n.initEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),o.dispatchEvent(n)},onClickArticle:function(t){this.$router.push("/coll/"+this.currCollId+"/"+t)}}}),x={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-toolbar",{attrs:{flat:"",color:"white"}},[i("v-toolbar-side-icon",{on:{click:t.back}},[i("v-icon",[t._v("arrow_back")])],1),t._v(" "),i("v-toolbar-title",[t._v(t._s(t.collTitle))]),t._v(" "),i("v-spacer"),t._v(" "),i("v-toolbar-items",[i("v-menu",{attrs:{"offset-y":"","min-width":"8em"}},[i("v-btn",{attrs:{slot:"activator",flat:"",icon:""},slot:"activator"},[i("v-icon",[t._v("more_vert")])],1),t._v(" "),i("v-list",[i("v-list-tile",{on:{click:t.exportCollection}},[i("v-list-tile-title",[t._v("Export")])],1),t._v(" "),i("v-list-tile",{on:{click:t.deleteCollection}},[i("v-list-tile-title",[t._v("Delete")])],1)],1)],1)],1)],1),t._v(" "),i("v-list",{attrs:{"three-line":""}},[i("v-card",{attrs:{flat:"",tile:""}},[i("v-card-text",{staticClass:"body-2 font-weight-thin"},[i("expandable-text",{attrs:{text:t.collDescription,textLimit:t.descriptionLimit}})],1)],1),t._v(" "),t._l(t.collArts,function(e){return i("pv-drawer-article-list-tile",{key:e.artHash,staticClass:"my-3",attrs:{art:e},on:{click:function(i){return t.onClickArticle(e.artHash)}}})})],2)],1)},staticRenderFns:[]},_=i("VU/8")(f,x,!1,null,null,null);e.default=_.exports},kUa0:function(t,e,i){"use strict";var n=i("tsiK"),r=i("/Fzg"),o=i("YOzM"),l=Object(n.a)(function(t){return t.art.artHash}),s={name:"PvDrawerArticleListTile",components:{PvDrawerArticleStatsRow:o.a},mixins:[l,r.a],props:{art:Object},data:function(){return{sideWidth:"8px"}},computed:{leftSideStyle:function(){return{position:"absolute",width:this.sideWidth,height:"100%",left:"0px",background:this.collReferenceColor}},rightSideStyle:function(){return{position:"absolute",width:this.sideWidth,height:"100%",right:"0px",background:this.collCitedByColor}}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-list-tile",t._g({nativeOn:{pointerenter:function(e){return t.onMouseEnter(e)},pointerleave:function(e){return t.onMouseLeave(e)}}},t.$listeners),[i("div",{style:t.leftSideStyle}),t._v(" "),i("v-list-tile-content",{staticStyle:{"justify-content":"space-evenly"}},[i("div",{staticClass:"caption text-truncate font-weight-bold"},[t._v(t._s(t.label))]),t._v(" "),i("div",{staticClass:"body-1 text-truncate font-weight-medium full-width"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),i("div",{staticClass:"caption text-truncate font-weight-light full-width"},[t._v("\n      "+t._s(t.abstract)+"\n    ")]),t._v(" "),i("pv-drawer-article-stats-row",{staticClass:"caption font-weight-thin",attrs:{venue:t.venue,year:t.year,nReferences:t.nReferences,nCitedBys:t.nCitedBys}})],1),t._v(" "),i("div",{style:t.rightSideStyle})],1)},staticRenderFns:[]};var a=i("VU/8")(s,c,!1,function(t){i("2dbZ")},"data-v-179a5ebb",null);e.a=a.exports}});
//# sourceMappingURL=6.7083db444d76c1ed361b.js.map