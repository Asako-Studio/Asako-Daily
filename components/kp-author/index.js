(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kp-author/index"],{"064a":function(e,t,n){"use strict";n.r(t);var r=n("a4e4"),o=n("2e5d");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("404a");var i,c=n("f0c5"),u=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"9aa22920",null,!1,r["a"],i);t["default"]=u.exports},"0a9c":function(e,t,n){"use strict";(function(e){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){Promise.all([n.e("common/vendor"),n.e("components/kp-icon/index")]).then(function(){return resolve(n("65e6"))}.bind(null,n)).catch(n.oe)},c=function(){Promise.all([n.e("common/vendor"),n.e("components/kp-avatar/index")]).then(function(){return resolve(n("19b6"))}.bind(null,n)).catch(n.oe)},u={name:"KpAuthor",components:{KpIcon:i,KpAvatar:c},props:{avatar:String,avatarBg:String,avatarGradient:String,icon:String,iconSize:{type:[String,Number],default:48},title:String,info:String,extra:{type:[Boolean,String,Object],default:!1},shape:{validator:function(e){return["circle","square"].includes(e)},default:"circle"},navigator:String},computed:{extraObj:function(){var e={size:45,icon:"arrow_right",color:"#585860"};switch(this.extra){case"miniprogram":return o({},e,{icon:"miniprogram",color:"#6367ef"});case"wechat":return o({},e,{icon:"wechat",color:"#07C160",size:40});default:break}return this.extra&&this.extra instanceof Object?o({},e,{},this.extra):e}},methods:{handleClick:function(t){if(this.navigator)return e.navigateTo({url:this.navigator});this.$emit("navigate",t)}}};t.default=u}).call(this,n("543d")["default"])},"2e5d":function(e,t,n){"use strict";n.r(t);var r=n("0a9c"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},a4e4:function(e,t,n){"use strict";var r,o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}))}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kp-author/index-create-component',
    {
        'components/kp-author/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("064a"))
        })
    },
    [['components/kp-author/index-create-component']]
]);
