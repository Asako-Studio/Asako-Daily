(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/creator/index"],{"14a0":function(e,n,t){"use strict";(function(e){t("3cea");o(t("66fd"));var n=o(t("b51d"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"7f64":function(e,n,t){"use strict";var o=t("85dc"),c=t.n(o);c.a},8111:function(e,n,t){"use strict";t.r(n);var o=t("b5de"),c=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,(function(){return o[e]}))}(i);n["default"]=c.a},"85dc":function(e,n,t){},9033:function(e,n,t){"use strict";var o,c=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.layout.switch=!0},e.e1=function(n){e.layout.switch=!0},e.e2=function(n){e.layout.switch=!0},e.e3=function(n){e.layout.switch=!0},e.e4=function(n){e.feedback.guideShare=!0},e.e5=function(n){e.feedback.guideTips=!1},e.e6=function(n){e.layout.switch=!1},e.e7=function(n){e.feedback.guideShare=!1})},i=[];t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return o}))},b51d:function(e,n,t){"use strict";t.r(n);var o=t("9033"),c=t("8111");for(var i in c)"default"!==i&&function(e){t.d(n,e,(function(){return c[e]}))}(i);t("d786"),t("7f64");var r,a=t("f0c5"),u=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,"232aef8e",null,!1,o["a"],r);n["default"]=u.exports},b5de:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("2f62"),c=i(t("4784"));function i(e){return e&&e.__esModule?e:{default:e}}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s=function(){Promise.all([t.e("common/vendor"),t.e("components/kp-badge/index")]).then(function(){return resolve(t("abdd"))}.bind(null,t)).catch(t.oe)},l=function(){Promise.all([t.e("common/vendor"),t.e("components/kp-icon/index")]).then(function(){return resolve(t("65e6"))}.bind(null,t)).catch(t.oe)},d=function(){Promise.all([t.e("common/vendor"),t.e("components/kp-avatar/index")]).then(function(){return resolve(t("19b6"))}.bind(null,t)).catch(t.oe)},f=function(){Promise.all([t.e("common/vendor"),t.e("components/kp-button/index")]).then(function(){return resolve(t("4ea4"))}.bind(null,t)).catch(t.oe)},p=function(){Promise.all([t.e("common/vendor"),t.e("components/kp-navbar/index")]).then(function(){return resolve(t("f69e"))}.bind(null,t)).catch(t.oe)},h=function(){Promise.all([t.e("common/vendor"),t.e("components/kp-spin/index")]).then(function(){return resolve(t("3cee"))}.bind(null,t)).catch(t.oe)},m=function(){Promise.all([t.e("common/vendor"),t.e("components/kp-actionsheet/index")]).then(function(){return resolve(t("146f"))}.bind(null,t)).catch(t.oe)},b={components:{KpIcon:l,KpBadge:s,KpButton:f,KpAvatar:d,KpNavbar:p,KpSpin:h,KpActionsheet:m},data:function(){var n=e.getStorageSync("".concat(c.default.key,"_creator_layout"))||"x";return{source:null,scrollTop:0,loading:!0,feedback:{guideTips:!1,guideTipsConfig:{text:"温馨提示：长按识别或保存微信相册扫一扫 ❤️"},guideShare:!1,guideShareList:[{text:"分享给朋友",opentype:"share"},{text:"生成分享海报",color:"#07C160"}]},layout:{switch:!1,current:n,list:[{text:"水平栅格模式",axis:"x"},{text:"垂直宫格模式",axis:"y"}].map((function(e){return a({},e,{color:e.axis===n&&"#07C160"})}))}}},computed:a({},(0,o.mapState)(["app"])),onLoad:function(e){e.source&&(this.source=e.source)},onReady:function(){this.loading=!1},onPageScroll:function(e){this.scrollTop=e.scrollTop},onShareAppMessage:function(e){var n=this.$store.state.app;return{title:"".concat(n.author.name,"的专辑\nAI 精选全球视觉与摄影艺术"),path:"pages/creator/index"}},methods:{handleCommonRoute:function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t)return e.switchTab({url:n});e.navigateTo({url:n})},handleOpenMiniprogram:function(n){n.disable?this.handleOpenGuide(n):n.appid&&e.navigateToMiniProgram({appId:n.appid,path:n.path,success:function(e){}})},handleOpenGuide:function(e){if(e.tipsImg){var n=this.feedback.guideTipsConfig;this.feedback.guideTipsConfig=a({},n,{image:e.tipsImg})}this.feedback.guideTips=!0},handleScrollTop:function(){e.pageScrollTo({scrollTop:0})},handleSharePoster:function(e){var n=this;switch(e){case 1:var t=this.$store.state.app.images;this.handleCommonRoute("/pages/poster/index?qrcode=".concat(t.qrcodes.creator));break;case 0:default:break}setTimeout((function(e){n.feedback.guideShare=!1}),500)},handleLayoutSwitch:function(n){var t=this.layout,o=t.list,i=t.current,r=o[n].axis;i!==r&&(this.layout=a({},this.layout,{current:r,list:o.map((function(e){return a({},e,{color:e.axis===r&&"#07C160"})}))}),e.setStorage({key:"".concat(c.default.key,"_creator_layout"),data:r,success:function(){e.showToast({title:"".concat(o[n].text.substring(2),"已切换"),icon:"success"})}}))},handleOpenApp:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;e.navigateToMiniProgram({appId:"wx1014f2e01d1623f9",path:"pages/home/index?tab=".concat(n),success:function(e){}})}}};n.default=b}).call(this,t("543d")["default"])}},[["14a0","common/runtime","common/vendor"]]]);