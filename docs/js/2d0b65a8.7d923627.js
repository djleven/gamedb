(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0b65a8"],{"1d98":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"jadzia flex flex-center"},[e("router-view")],1)},i=[];o._withStripped=!0;var r={mounted:function(){document.body.classList.add("no-scroll-bar"),this.$store.commit("setTopOffset",window.scrollY),this.$store.commit("setScroll",{active:this.getCurrentActiveSection(),lastScrollTop:this.topOffset}),window.addEventListener("scroll",this.handleScroll),this.$store.commit("setLoading",!1)},destroyed:function(){this.$store.commit("resetWindowProps"),window.removeEventListener("scroll",this.handleScroll)},computed:{topOffset:function(){return this.$store.getters.getTopOffset},scrollStatus:function(){return this.$store.getters.getScrollStatus},sections:function(){return this.scrollStatus.items}},methods:{scrollPageTo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;t||(t=this.scrollStatus.down?this.getScrollToNext():this.getScrollToPrev()),this.$store.dispatch("scrollPageTo",{to:t,duration:s})},handleScroll:function(){if(!this.scrollStatus.scrollStarted){this.$store.commit("setTopOffset",window.scrollY);var t=this.topOffset,s=this.scrollStatus.lastScrollTop;t!==s&&(this.$store.commit("setScroll",{down:t>s,scrollStarted:!0}),null!==this.scrollStatus.active&&this.scrollPageTo())}},getScrollToNext:function(){var t=null,s=this.sections.length,e=this.scrollStatus.active;return e===s?t=-1:e!==s&&(t=".".concat(this.sections[e+1])),t},getScrollToPrev:function(){var t=null,s=this.scrollStatus.active;return 1===s?t=0:0!==s&&(t=".".concat(this.sections[s-1])),t},getCurrentActiveSection:function(){if(this.sections.length)return Math.floor(this.topOffset/this.$store.getters.getHeight);throw new Error("Jadzia sections have not been set")}}},l=r,n=e("2877"),c=Object(n["a"])(l,o,i,!1,null,null,null);c.options.__file="Jadzia.vue";s["default"]=c.exports}}]);