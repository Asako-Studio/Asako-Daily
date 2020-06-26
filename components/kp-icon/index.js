(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kp-icon/index"],{"343d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=e("f8ee"),o={name:"KpIcon",props:{type:String,size:{type:[Number,String],default:28},color:{type:String,default:"#fff"},svg:Boolean},data:function(){return{prefixCls:"m-icon"}},created:function(){this.svg&&(0,c.loadExternalJS)(["https://at.alicdn.com/t/font_1411765_dy1q2y9unph.js"])},computed:{iconName:function(){return"#".concat(this.prefixCls,"-").concat(this.type)}},methods:{onClick:function(){this.$emit("click")}}};n.default=o},"65e6":function(t,n,e){"use strict";e.r(n);var c=e("e121"),o=e("8046");for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("aa71");var u,a=e("f0c5"),i=Object(a["a"])(o["default"],c["b"],c["c"],!1,null,"71a5892a",null,!1,c["a"],u);n["default"]=i.exports},8046:function(t,n,e){"use strict";e.r(n);var c=e("343d"),o=e.n(c);for(var r in c)"default"!==r&&function(t){e.d(n,t,(function(){return c[t]}))}(r);n["default"]=o.a},e121:function(t,n,e){"use strict";var c,o=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return c}))}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kp-icon/index-create-component',
    {
        'components/kp-icon/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("65e6"))
        })
    },
    [['components/kp-icon/index-create-component']]
]);
