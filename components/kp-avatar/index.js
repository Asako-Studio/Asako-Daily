(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/kp-avatar/index"],{"19b6":function(e,t,n){"use strict";n.r(t);var r=n("d4bb"),i=n("7c26");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("a106");var c,u=n("f0c5"),o=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"3a8710fc",null,!1,r["a"],c);t["default"]=o.exports},"7c26":function(e,t,n){"use strict";n.r(t);var r=n("e7c3"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},d4bb:function(e,t,n){"use strict";var r,i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}))},e7c3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("f8ee"),i=function(){Promise.all([n.e("common/vendor"),n.e("components/kp-icon/index")]).then(function(){return resolve(n("65e6"))}.bind(null,n)).catch(n.oe)},a="k-avatar",c={name:"KpAvatar",components:{KpIcon:i},props:{shape:{validator:function(e){return["circle","square"].includes(e)},default:"circle"},size:{type:[String,Number],default:"default"},image:String,icon:String,iconSize:{type:[Number,String],default:28},avatarBg:String,avatarGradient:String,mode:{type:String,default:"widthFix"}},data:function(){return{prefixCls:a}},computed:{avatarSize:function(){return(0,r.isNumber)(Number(this.size))&&"".concat(Number(this.size),"rpx")}},methods:{handleBoxClick:function(e){this.$emit("on-click",e)},handleImgError:function(e){this.$emit("on-error",e)}}};t.default=c}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/kp-avatar/index-create-component',
    {
        'components/kp-avatar/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("19b6"))
        })
    },
    [['components/kp-avatar/index-create-component']]
]);