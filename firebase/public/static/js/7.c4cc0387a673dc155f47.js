webpackJsonp([7],{"/DpN":function(t,e){},"35em":function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=l("woOf"),n=l.n(i),o=l("Dd8w"),s=l.n(o),c=l("M4fF"),a=l.n(c),r=l("DaHx"),v=l("ltMk"),u=function(t){var e=Object(v.a)();return r.c.collection("collections").add(s()({},t,{owner:e.uid}))},d=function(){var t=Object(v.a)();return r.c.collection("collMetas").where("owner","==",t.uid).get()},f=function(){return d().then(function(t){return a.a.map(t.docs,function(t){return s()({collId:t.id},t.data())})})},_=l("yviF"),p=(l("881v"),{name:"CollectionList",data:function(){return{dialog:!1,collections:[],newCollection:null,actions:["edit","delete"],selected:0,filters:[{text:"All Collections",icon:"home"},{text:"My Collections",icon:"face"},{text:"Shared with Me",icon:"people"},{text:"Watched",icon:"bookmark"}]}},created:function(){this.setDefaultsForNewCollection()},methods:{filterCollection:function(t){this.selected=t,console.log(this.selected)},collectionURL:function(t){return"/collection/"+t.id},createCollection:function(){var t=this;this.newCollection.lastUpdated=_.firestore.FieldValue.serverTimestamp(),u(this.newCollection).then(function(e){t.collections.push(n()({},t.newCollection)),t.setDefaultsForNewCollection(),t.dialog=!1})},setDefaultsForNewCollection:function(){this.newCollection={name:null,description:null,nArticle:0,public:!1}},commitAction:function(t,e){}}}),h={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-container",{attrs:{fluid:"","fill-height":""}},[l("v-layout",{attrs:{row:"","align-top":"","justify-center":""}},[l("v-flex",{staticClass:"pa-1",attrs:{xs3:""}},[l("v-card",{staticClass:"pa-2",attrs:{flat:""}},[l("v-btn",{staticClass:"ma-3",attrs:{color:"primary"},on:{click:function(e){t.dialog=!0}}},[l("v-icon",[t._v("add")]),t._v(" New Collection\n        ")],1),t._v(" "),l("v-list",{attrs:{rounded:""}},t._l(t.filters,function(e,i){return l("v-list-tile",{key:i,class:{active:t.selected==i},on:{click:function(e){return t.filterCollection(i)}}},[l("v-list-tile-action",[l("v-icon",{class:{active:t.selected==i},domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",{domProps:{textContent:t._s(e.text)}})],1)],1)}),1)],1)],1),t._v(" "),l("v-flex",{staticClass:"pa-1",attrs:{xs9:""}},[l("v-toolbar",{attrs:{flat:"",dense:""}},[l("v-toolbar-title",[t._v("Paper Collections")]),t._v(" "),l("v-spacer")],1),t._v(" "),l("v-card",{attrs:{flat:""}},[l("v-list",[t._l(t.collections,function(e,i){return[l("v-list-tile",{key:e.title,staticStyle:{cursor:"pointer"},attrs:{avatar:"",ripple:"",to:t.collectionURL(e)}},[l("v-list-tile-content",[l("v-list-tile-title",[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),l("v-list-tile-sub-title",{staticClass:"text--primary"},[t._v(t._s(e.description))])],1),t._v(" "),l("v-list-tile-action",[l("v-list-tile-action-text",[t._v(t._s(e.nArticle))])],1)],1),t._v(" "),i+1<t.collections.length?l("v-divider",{key:i}):t._e()]})],2)],1)],1)],1),t._v(" "),l("v-dialog",{attrs:{persistent:"","max-width":"60%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[l("v-card",[l("v-card-title",{staticClass:"headline"},[t._v("Create new collection")]),t._v(" "),l("v-card-text",[l("v-text-field",{attrs:{label:"Name"},model:{value:t.newCollection.title,callback:function(e){t.$set(t.newCollection,"title",e)},expression:"newCollection.title"}}),t._v(" "),l("v-text-field",{attrs:{label:"Discription",box:""},model:{value:t.newCollection.description,callback:function(e){t.$set(t.newCollection,"description",e)},expression:"newCollection.description"}})],1),t._v(" "),l("v-card-actions",[l("v-spacer"),t._v(" "),l("v-btn",{attrs:{color:"green darken-1",flat:"flat"},on:{click:function(e){return t.createCollection()}}},[t._v("\n          Create\n        ")]),t._v(" "),l("v-btn",{attrs:{flat:"flat"},on:{click:function(e){t.dialog=!1}}},[t._v("\n          Cancel\n        ")])],1)],1)],1)],1)},staticRenderFns:[]};var C=l("VU/8")(p,h,!1,function(t){l("y6XF")},"data-v-2b960460",null).exports,m={name:"UserMenu",data:function(){return{user:Object(v.a)()}}},g={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.user?l("v-menu",{attrs:{"offset-y":""}},[l("v-btn",{attrs:{slot:"activator",large:"",icon:""},slot:"activator"},[t.user.photo?t._e():l("v-icon",{key:"icon",attrs:{large:"",color:"grey darken-2"}},[t._v("\n      account_circle\n    ")]),t._v(" "),l("v-avatar",{attrs:{size:"36px"}},[l("img",{attrs:{src:t.user.photo}})])],1),t._v(" "),l("v-list",[l("v-subheader",[t._v(t._s(t.user.email))]),t._v(" "),l("v-list-tile",{attrs:{to:"/user#collections"}},[l("v-list-tile-title",[t._v("My collections")])],1),t._v(" "),l("v-list-tile",{attrs:{to:"/user/settings"}},[l("v-list-tile-title",[t._v("Settings")])],1),t._v(" "),l("v-list-tile",{attrs:{to:"/help"}},[l("v-list-tile-title",[t._v("Help")])],1),t._v(" "),l("v-list-tile",{attrs:{to:"/auth/signout"}},[l("v-list-tile-title",[t._v("Sign out")])],1)],1)],1):l("v-btn",{attrs:{flat:"",small:"",to:"/auth/signin"}},[t._v("Sign In")])},staticRenderFns:[]};var b={name:"UserPage",components:{UserMenu:l("VU/8")(m,g,!1,function(t){l("7Atk")},"data-v-5ca85a19",null).exports,CollectionList:C},data:function(){return{user:null,activeTab:"paper",localStore:null,collection:{name:"Progressive visual analysis",description:null}}},mounted:function(){var t=this;f().then(function(e){t.$refs.UserCollections.collections=e})},methods:{}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-content",[e("v-toolbar",{staticClass:"app-header",attrs:{"clipped-left":"",flat:""}},[e("v-toolbar-title",[this._v("Cited")]),this._v(" "),e("v-spacer"),this._v(" "),e("UserMenu")],1),this._v(" "),e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{row:"","align-top":"","justify-center":""}},[e("CollectionList",{ref:"UserCollections"})],1)],1)],1)],1)},staticRenderFns:[]};var x=l("VU/8")(b,w,!1,function(t){l("/DpN")},"data-v-167ecc80",null);e.default=x.exports},"7Atk":function(t,e){},y6XF:function(t,e){}});
//# sourceMappingURL=7.c4cc0387a673dc155f47.js.map