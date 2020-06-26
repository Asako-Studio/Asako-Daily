(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kp-badge/index"],{6548:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={name:"KpBadge",props:{type:{type:String,validator:function(t){return["primary","error","default","warning"].includes(t)},default:"primary"},size:{type:String,default:""},color:String,bgColor:String,bgGradient:String,dot:{type:Boolean,default:!1}},data:function(){return{prefixCls:"k-badge"}},methods:{handleClick:function(){this.$emit("click")}}};n.default=r},"9dd6":function(t,n,e){"use strict";e.r(n);var r=e("6548"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);n["default"]=a.a},abdd:function(t,n,e){"use strict";e.r(n);var r=e("cd5d"),a=e("9dd6");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("0d78");var d,i=e("f0c5"),o=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"5dc775f4",null,!1,r["a"],d);n["default"]=o.exports},cd5d:function(t,n,e){"use strict";var r,a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return r}))}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kp-badge/index-create-component',
    {
        'components/kp-badge/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("abdd"))
        })
    },
    [['components/kp-badge/index-create-component']]
]);
