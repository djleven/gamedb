(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0b65a8"],{"1d98":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-center"},[s("router-view")],1)},r=[];o._withStripped=!0;var l={mounted:function(){this.$store.dispatch("scrollPageTo",{to:0,duration:1e3}),window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){var t=this;this.$store.dispatch("scrollPageTo",{to:0,duration:0}).then(function(){return t.$store.commit("resetWindowProps")})},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{height:function(){return this.$store.getters.getHeight},width:function(){return this.$store.getters.getWidth},topOffset:function(){return this.$store.getters.getTopOffset},scrollStatus:function(){return this.$store.getters.getScrollStatus},sections:function(){return this.scrollStatus.items},pageClass:function(){return this.$store.getters.getPageClass}},methods:{scrollPageTo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;t||(t=this.scrollStatus.down?this.getScrollToNext():this.getScrollToPrev()),this.$store.dispatch("scrollPageTo",{to:t,duration:e})},handleScroll:function(){if(!this.scrollStatus.scrollStarted){this.$store.commit("setTopOffset",window.scrollY);var t=this.topOffset,e=this.scrollStatus.lastScrollTop;t!==e&&(this.$store.commit("setScroll",{down:t>e,scrollStarted:!0}),null!==this.scrollStatus.active&&this.scrollPageTo())}},getScrollToNext:function(){var t=null,e=this.sections.length,s=this.scrollStatus.active;return s===e?t=-1:s!==e&&(t=".".concat(this.sections[s+1])),t},getScrollToPrev:function(){var t=null,e=this.scrollStatus.active;return 1===e?t=0:0!==e&&(t=".".concat(this.sections[e-1])),t}}},i=l,n=s("2877"),c=Object(n["a"])(i,o,r,!1,null,null,null);c.options.__file="Jadzia.vue";e["default"]=c.exports}}]);