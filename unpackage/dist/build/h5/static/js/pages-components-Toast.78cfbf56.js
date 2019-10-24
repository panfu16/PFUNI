(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-Toast"],{"028e":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-082e9d2e]{padding:%?40?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?14?%}.content .bnt[data-v-082e9d2e]{position:relative;width:100%;background:#2b9939;color:#fff;height:%?60?%;line-height:%?60?%;margin:0 auto %?40?%;text-align:center;font-size:%?16?%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.content .h2[data-v-082e9d2e]{font-size:%?24?%;margin-bottom:%?10?%;font-weight:700}.content .h3[data-v-082e9d2e]{font-size:%?20?%;margin:%?20?% auto;font-weight:700;color:red}.content .tip[data-v-082e9d2e]{font-size:%?14?%;text-indent:%?15?%;margin:%?20?% auto}.content .pre[data-v-082e9d2e]{background:#eee;color:#000;padding:%?20?% %?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin-bottom:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:auto;word-wrap:normal}.content .pre element[data-v-082e9d2e]{width:100%;display:block;height:100%}.content .pre .isCopy[data-v-082e9d2e]{position:absolute;right:%?10?%;bottom:%?5?%;background:#55a532;color:#fff;padding:%?5?%;-webkit-border-radius:%?2?%;border-radius:%?2?%}.content .html[data-v-082e9d2e],.content .js[data-v-082e9d2e]{position:relative}.content .html[data-v-082e9d2e]:before{content:"HTML";position:absolute;top:0;right:%?12?%;color:#999}.content .js[data-v-082e9d2e]:before{content:"JS";position:absolute;top:0;right:%?12?%;color:#999}.content .title[data-v-082e9d2e]{margin:%?20?% auto}.content .list[data-v-082e9d2e]{border:%?1?% solid #eee;border-right:0;border-bottom:0;margin:%?20?% auto}.content .th[data-v-082e9d2e]{background:#f8f8f8;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content uni-text[data-v-082e9d2e]{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:%?50?%;line-height:%?50?%;text-align:center;border-right:%?1?% solid #eee}.content .td[data-v-082e9d2e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content uni-text[data-v-082e9d2e]{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;min-height:%?50?%;line-height:%?50?%;border-right:%?1?% solid #eee;border-bottom:%?1?% solid #eee;padding:%?20?% auto;overflow:hidden}.content .swipe[data-v-082e9d2e],.content .swiper-warp[data-v-082e9d2e]{background:#2b9939}',""])},2803:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"bnt",on:{click:function(e){e=t.$handleEvent(e),t.showToastTop(e)}}},[t._v("点击Toast-top")]),n("v-uni-view",{staticClass:"bnt",on:{click:function(e){e=t.$handleEvent(e),t.showToastCentre(e)}}},[t._v("点击Toast-centre")]),n("v-uni-view",{staticClass:"bnt",on:{click:function(e){e=t.$handleEvent(e),t.showToastBottom(e)}}},[t._v("点击Toast-bottom")]),n("v-uni-view",{staticClass:"h2"},[t._v("Toast")]),n("v-uni-view",{staticClass:"tip"},[t._v("Toast组件主要用于非模态信息提醒，无需用户交互。")]),n("v-uni-view",[n("strong",[t._v("注:")]),t._v("由于此组件基于PFUIN实现，所以在使用之前，请确保自己了解过")]),n("v-uni-view",{staticClass:"h3"},[t._v("注意：如果没有特殊要求可以使用uniapp官网提供的uni.showToast()、uni.showLoading()这个方法")]),n("v-uni-view",{staticClass:"h3"},[t._v("示例")]),n("pre",{staticClass:"pre html"},[t._v(""),n("element",{attrs:{contenteditable:"true"}},[t._v(t._s(t.htmlData))]),t._v(""),t._v("")]),n("v-uni-view",{staticClass:"title"},[t._v("基本用法")]),n("pre",{staticClass:"pre js"},[t._v(""),n("element",{attrs:{contenteditable:"true"}},[t._v(t._s(t.jsData2))]),t._v("")]),n("v-uni-view",{staticClass:"title"},[t._v("time 字段决定了 Toast 显示的时间，如果设置为 0，则不会消失，需要手动调用组件的 hide 方法。")]),n("pre",{staticClass:"pre js"},[t._v(""),n("element",{attrs:{contenteditable:"true"}},[t._v(t._s(t.jsData))]),t._v("")]),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"th"},[n("v-uni-text",[t._v("属性名")]),n("v-uni-text",[t._v("说明")]),n("v-uni-text",[t._v("类型")]),n("v-uni-text",[t._v("默认值")]),n("v-uni-text",[t._v("版本")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("show")]),n("v-uni-text",[t._v("显示")]),n("v-uni-text",[t._v("function")]),n("v-uni-text",[t._v("无")]),n("v-uni-text",[t._v("1.0.0")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("hide")]),n("v-uni-text",[t._v("隐藏")]),n("v-uni-text",[t._v("function")]),n("v-uni-text",[t._v("无")]),n("v-uni-text",[t._v("1.0.0")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("duration")]),n("v-uni-text",[t._v("显示时间(如果设置为 0，则不会消失，需要手动调用组件的 hide 方法)")]),n("v-uni-text",[t._v("Number")]),n("v-uni-text",[t._v("2000")]),n("v-uni-text",[t._v("1.0.0")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("icon")]),n("v-uni-text",[t._v("显示加载图标")]),n("v-uni-text",[t._v("String")]),n("v-uni-text",[t._v("icon")]),n("v-uni-text",[t._v("1.0.0")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("position")]),n("v-uni-text",[t._v("显示位置")]),n("v-uni-text",[t._v("String")]),n("v-uni-text",[t._v("placemiddle(top,bottom)")]),n("v-uni-text",[t._v("1.0.0")])],1)],1),n("Toasts",{ref:"Toast"})],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"3a25":function(t,e,n){var i=n("028e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("55d55702",i,!0,{sourceMap:!1,shadowMode:!1})},"3f8c":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-content[data-v-2eee81aa]{position:absolute;max-width:40%;background:rgba(0,0,0,.5);color:#fff;padding:%?10?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;z-index:99;-o-transition:opacity .3s linear;transition:opacity .3s linear;-webkit-transition:opacity .3s linear}.placetop[data-v-2eee81aa]{left:50%;top:%?200?%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%)}.placemiddle[data-v-2eee81aa]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.placebottom[data-v-2eee81aa]{left:50%;bottom:%?100?%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%)}.loading[data-v-2eee81aa]{width:%?50?%;height:%?50?%;position:relative;display:block;margin:0 auto}@-moz-keyframes opacity-data-v-2eee81aa{0%{opacity:0}to{opacity:1}}@-webkit-keyframes opacity-data-v-2eee81aa{0%{opacity:0}to{opacity:1}}@-o-keyframes opacity-data-v-2eee81aa{0%{opacity:0}to{opacity:1}}@keyframes opacity-data-v-2eee81aa{0%{opacity:0}to{opacity:1}}",""])},"4c8f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a74d"));function a(t){return t&&t.__esModule?t:{default:t}}var o={components:{Toasts:i.default},data:function(){return{htmlData:'<view @click="showToast"></view>',jsData:'export default {methods: {\n\t\t\t\tshowToast() {\n\t\t\t\t this.$refs.Toast.show({message:"提示信息",duration:0,position:"bottom",icon:true});\n\t\t\t\t}\n\t\t\t  }\n\t\t\t}',jsData2:'export default {methods: {\n\t\t\t\tshowToast() {\n\t\t\t\t this.$refs.Toast.show("提示信息")\n\t\t\t\t}\n\t\t\t  }\n\t\t\t}'}},onLoad:function(t){},created:function(){},methods:{showToastTop:function(){this.$refs.Toast.show({message:"显示在头部",position:"top"})},showToastCentre:function(){this.$refs.Toast.show({message:"加载中...",duration:2e3,icon:"icon"})},showToastBottom:function(){this.$refs.Toast.show({message:"提示信息",duration:2e3,position:"bottom"})}}};e.default=o},"5eef":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.visible?n("v-uni-view",{staticClass:"uni-content",class:"top"==t.position?"placetop":"bottom"==t.position?"placebottom":"placemiddle"},["icon"==t.icon?n("v-uni-image",{staticClass:"loading",attrs:{src:"../../static/loading.gif"}}):t._e(),n("v-uni-view",[t._v(t._s(t.message))])],1):t._e()],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},6361:function(t,e,n){var i=n("3f8c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6c883fbc",i,!0,{sourceMap:!1,shadowMode:!1})},"64a0":function(t,e,n){"use strict";var i=n("6361"),a=n.n(i);a.a},"7bc2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"Toast",props:{className:{type:String,default:""}},data:function(){return{visible:!1,message:"",position:"placemiddle",duration:2e3,icon:""}},onLoad:function(t){},created:function(){},methods:{hide:function(){this.visible=!1},show:function(t){var e=this;console.log(t),this.message="string"===typeof t?t:t.message,this.position=t.position||"placemiddle",this.duration=t.duration||this.duration,this.icon=t.icon,this.visible=!0,0!=t.duration&&setTimeout(function(){e.visible=!1},this.duration)}},computed:{}};e.default=i},a74d:function(t,e,n){"use strict";n.r(e);var i=n("5eef"),a=n("e0c3");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("64a0");var s=n("2877"),r=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"2eee81aa",null);e["default"]=r.exports},bec1:function(t,e,n){"use strict";var i=n("3a25"),a=n.n(i);a.a},bfab:function(t,e,n){"use strict";n.r(e);var i=n("4c8f"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},e0c3:function(t,e,n){"use strict";n.r(e);var i=n("7bc2"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},ea96:function(t,e,n){"use strict";n.r(e);var i=n("2803"),a=n("bfab");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("bec1");var s=n("2877"),r=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"082e9d2e",null);e["default"]=r.exports}}]);