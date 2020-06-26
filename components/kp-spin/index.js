(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kp-spin/index"],{"1e22":function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}))},"3cee":function(e,t,n){"use strict";n.r(t);var a=n("1e22"),o=n("f671");for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);n("082d");var i,l=n("f0c5"),f=Object(l["a"])(o["default"],a["b"],a["c"],!1,null,"5b55b00b",null,!1,a["a"],i);t["default"]=f.exports},"4a22":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="k-spin",o={name:"KpSpin",props:{size:{type:String,default:"default"},center:{type:Boolean,default:!0},fix:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},custom:{type:Boolean,default:!1},color:{type:String,default:"#623bff"},height:{type:[String,Number],default:300},loadImage:[String,Boolean],loadImageSize:{type:[String,Number],default:160}},data:function(){return{prefixCls:a}},computed:{spinImage:function(){if(this.loadImage)return"boolean"===typeof this.loadImage?"https://6173-asako-studio-9c2pl-1301657606.tcb.qcloud.la/static/loading_default.svg?sign=119845efd5dde7f3874c62e5b2be11b3&t=1585118875":"string"===typeof this.loadImage&&this.loadImage}},methods:{}};t.default=o},f671:function(e,t,n){"use strict";n.r(t);var a=n("4a22"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kp-spin/index-create-component',
    {
        'components/kp-spin/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3cee"))
        })
    },
    [['components/kp-spin/index-create-component']]
]);
