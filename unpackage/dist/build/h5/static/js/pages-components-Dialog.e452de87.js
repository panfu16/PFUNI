(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-Dialog"],{"0d03":function(t,e,i){"use strict";i.r(e);var n=i("cb27"),a=i("74d0");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("aab6");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"715bf2e7",null);e["default"]=r.exports},1840:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-715bf2e7]{padding:%?40?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?14?%}.content .bnt[data-v-715bf2e7]{position:relative;width:100%;background:#2b9939;color:#fff;height:%?60?%;line-height:%?60?%;margin:0 auto %?40?%;text-align:center;font-size:%?16?%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.content .h2[data-v-715bf2e7]{font-size:%?24?%;margin-bottom:%?10?%;font-weight:700}.content .h3[data-v-715bf2e7]{font-size:%?20?%;margin:%?20?% auto;font-weight:700;color:red}.content .tip[data-v-715bf2e7]{font-size:%?14?%;text-indent:%?15?%;margin:%?20?% auto}.content .pre[data-v-715bf2e7]{background:#eee;color:#000;padding:%?20?% %?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin-bottom:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:auto;word-wrap:normal}.content .pre element[data-v-715bf2e7]{width:100%;display:block;height:100%}.content .pre .isCopy[data-v-715bf2e7]{position:absolute;right:%?10?%;bottom:%?5?%;background:#55a532;color:#fff;padding:%?5?%;-webkit-border-radius:%?2?%;border-radius:%?2?%}.content .html[data-v-715bf2e7],.content .js[data-v-715bf2e7]{position:relative}.content .html[data-v-715bf2e7]:before{content:"HTML";position:absolute;top:0;right:%?12?%;color:#999}.content .js[data-v-715bf2e7]:before{content:"JS";position:absolute;top:0;right:%?12?%;color:#999}.content .title[data-v-715bf2e7]{margin:%?20?% auto}.content .list[data-v-715bf2e7]{border:%?1?% solid #eee;border-right:0;border-bottom:0;margin:%?20?% auto}.content .th[data-v-715bf2e7]{background:#f8f8f8;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content uni-text[data-v-715bf2e7]{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:%?50?%;line-height:%?50?%;text-align:center;border-right:%?1?% solid #eee}.content .td[data-v-715bf2e7]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content uni-text[data-v-715bf2e7]{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;min-height:%?50?%;line-height:%?50?%;border-right:%?1?% solid #eee;border-bottom:%?1?% solid #eee;padding:%?20?% auto;overflow:hidden}.content .swipe[data-v-715bf2e7],.content .swiper-warp[data-v-715bf2e7]{background:#2b9939}',""])},"21bd":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.isShow?i("v-uni-view",{staticClass:"uni-mask",on:{click:function(e){e=t.$handleEvent(e),t.hide(e)}}}):t._e(),t.isContent?i("v-uni-view",{staticClass:"uni-content"},[i("v-uni-view",{staticClass:"uni-title"},[t._v(t._s(t.titile))]),i("v-uni-view",{staticClass:"uni-info"},[t._v(t._s(t.message))]),i("v-uni-view",{staticClass:"box"},[t.isShowBnt?i("v-uni-view",{staticClass:"left",on:{click:function(e){e=t.$handleEvent(e),t.getCancel(e)}}},[t._v(t._s(t.cancel))]):t._e(),i("v-uni-view",{on:{click:function(e){e=t.$handleEvent(e),t.getConfirm(e)}}},[t._v(t._s(t.confirm))])],1)],1):t._e()],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"29d1":function(t,e,i){var n=i("1840");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0433a762",n,!0,{sourceMap:!1,shadowMode:!1})},"3f04":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("cf4b")),a=o(i("a74d"));function o(t){return t&&t.__esModule?t:{default:t}}var s={components:{Toasts:a.default,Dialogs:n.default},data:function(){return{htmlData:'<view @click="showToast"></view>',jsData:'export default {methods: {\n\t\t\t\t  showToast() { //显示头部\n\t\t\t\t   this.$refs.Dialog.show(\n\t\t\t\t   {message:"我是Dialog内容哦~~",\n\t\t\t\t   isShowBnt:true,\n\t\t\t\t   isShow:true,\n\t\t\t\t   onConfirm:()=>{\n\t\t\t\t\t    this.$refs.Toast.show("你点击啦确定确定哦~~");\n\t\t\t\t   },onCancel:()=>{\n\t\t\t\t\t   this.$refs.Toast.show("你点击啦取消")\n\t\t\t\t   }});\n\t\t\t\t}\n\t\t\t  }\n\t\t\t}'}},onLoad:function(t){},created:function(){},methods:{showToast:function(){var t=this;console.log("==========="),this.$refs.Dialog.show({message:"我是Dialog内容哦~~",isShowBnt:!0,isShow:!0,onConfirm:function(){t.$refs.Toast.show("你点击啦确定确定哦~~")},onCancel:function(){t.$refs.Toast.show("你点击啦取消")}})},showToast2:function(){var t=this;this.$refs.Dialog.show({message:"我是Dialog内容哦~~",isShowBnt:!0,isShow:!1,onConfirm:function(){t.$refs.Toast.show("你点击啦确定确定哦~~")},onCancel:function(){t.$refs.Toast.show("你点击啦取消")}})}}};e.default=s},"3f8c":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-content[data-v-2eee81aa]{position:absolute;max-width:40%;background:rgba(0,0,0,.5);color:#fff;padding:%?10?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;z-index:99;-o-transition:opacity .3s linear;transition:opacity .3s linear;-webkit-transition:opacity .3s linear}.placetop[data-v-2eee81aa]{left:50%;top:%?200?%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%)}.placemiddle[data-v-2eee81aa]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.placebottom[data-v-2eee81aa]{left:50%;bottom:%?100?%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%)}.loading[data-v-2eee81aa]{width:%?50?%;height:%?50?%;position:relative;display:block;margin:0 auto}@-moz-keyframes opacity-data-v-2eee81aa{0%{opacity:0}to{opacity:1}}@-webkit-keyframes opacity-data-v-2eee81aa{0%{opacity:0}to{opacity:1}}@-o-keyframes opacity-data-v-2eee81aa{0%{opacity:0}to{opacity:1}}@keyframes opacity-data-v-2eee81aa{0%{opacity:0}to{opacity:1}}",""])},"5eef":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[t.visible?i("v-uni-view",{staticClass:"uni-content",class:"top"==t.position?"placetop":"bottom"==t.position?"placebottom":"placemiddle"},["icon"==t.icon?i("v-uni-image",{staticClass:"loading",attrs:{src:"../../static/loading.gif"}}):t._e(),i("v-uni-view",[t._v(t._s(t.message))])],1):t._e()],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},6361:function(t,e,i){var n=i("3f8c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6c883fbc",n,!0,{sourceMap:!1,shadowMode:!1})},"64a0":function(t,e,i){"use strict";var n=i("6361"),a=i.n(n);a.a},"74d0":function(t,e,i){"use strict";i.r(e);var n=i("3f04"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},"76c7":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"Dialog",data:function(){return{isShow:!1,isContent:!1,titile:"系统提示",confirm:"确定",cancel:"取消",message:"",isShowBnt:!0,onConfirm:"",onCancel:""}},onLoad:function(t){},created:function(){},methods:{hide:function(){this.isShow=!1,this.isContent=!1},show:function(t){this.message="string"===typeof t?t:t.message,this.titile=t.titile||this.titile,this.confirm=t.confirm||this.confirm,this.cancel=t.cancel||this.cancel,this.isShow=t.isShow,"undefined"==typeof t.isShow&&(this.isShow=!0),"undefined"!==typeof t.isShowBnt&&(this.isShowBnt=t.isShowBnt),"undefined"!==typeof t.onConfirm&&(this.onConfirm=t.onConfirm),"undefined"!==typeof t.onCancel&&(this.onCancel=t.onCancel),this.isContent=!0},getConfirm:function(){this.hide(),"function"==typeof this.onConfirm&&this.onConfirm()},getCancel:function(){this.hide(),"function"==typeof this.onCancel&&this.onCancel()}}};e.default=n},"7bc2":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"Toast",props:{className:{type:String,default:""}},data:function(){return{visible:!1,message:"",position:"placemiddle",duration:2e3,icon:""}},onLoad:function(t){},created:function(){},methods:{hide:function(){this.visible=!1},show:function(t){var e=this;console.log(t),this.message="string"===typeof t?t:t.message,this.position=t.position||"placemiddle",this.duration=t.duration||this.duration,this.icon=t.icon,this.visible=!0,0!=t.duration&&setTimeout(function(){e.visible=!1},this.duration)}},computed:{}};e.default=n},"90db":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".uni-mask[data-v-de1a2c4c]{background:rgba(0,0,0,.6);position:fixed;width:100%;height:100%;left:0;top:0;z-index:99}.uni-content[data-v-de1a2c4c]{width:80%;position:fixed;left:50%;top:50%;background:#fff;z-index:100;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-box-shadow:0 %?5?% %?2?% #f5f5f5;box-shadow:0 %?5?% %?2?% #f5f5f5;-o-transition:opacity .3s linear;transition:opacity .3s linear;-webkit-transition:opacity .3s linear}.uni-title[data-v-de1a2c4c]{text-align:center;height:%?80?%;line-height:%?80?%;border-bottom:%?2?% solid #eee;font-size:%?30?%}.uni-info[data-v-de1a2c4c]{padding:%?60?% %?30?%;color:#999}.box[data-v-de1a2c4c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-top:%?1?% solid #eee}.box uni-view[data-v-de1a2c4c]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;padding:%?30?%;color:#55a532}.box .left[data-v-de1a2c4c]{border-right:%?1?% solid #eee;color:#333}@-moz-keyframes opacity-data-v-de1a2c4c{0%{opacity:0}to{opacity:1}}@-webkit-keyframes opacity-data-v-de1a2c4c{0%{opacity:0}to{opacity:1}}@-o-keyframes opacity-data-v-de1a2c4c{0%{opacity:0}to{opacity:1}}@keyframes opacity-data-v-de1a2c4c{0%{opacity:0}to{opacity:1}}",""])},a74d:function(t,e,i){"use strict";i.r(e);var n=i("5eef"),a=i("e0c3");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("64a0");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"2eee81aa",null);e["default"]=r.exports},aab6:function(t,e,i){"use strict";var n=i("29d1"),a=i.n(n);a.a},b097:function(t,e,i){"use strict";var n=i("bd3b"),a=i.n(n);a.a},bd3b:function(t,e,i){var n=i("90db");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4236f314",n,!0,{sourceMap:!1,shadowMode:!1})},cb27:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"bnt",on:{click:function(e){e=t.$handleEvent(e),t.showToast(e)}}},[t._v("点击Dialog")]),i("v-uni-view",{staticClass:"bnt",on:{click:function(e){e=t.$handleEvent(e),t.showToast2(e)}}},[t._v("点击Dialog")]),i("v-uni-view",{staticClass:"h2"},[t._v("Dialog")]),i("v-uni-view",{staticClass:"tip"},[t._v("Dialog组件主要用于非模态信息提醒，无需用户交互。")]),i("v-uni-view",[i("strong",[t._v("注:")]),t._v("由于此组件基于PFUIN实现，所以在使用之前，请确保自己了解过")]),i("v-uni-view",{staticClass:"h3"},[t._v("注意：如果没有特殊要求可以使用uniapp官网提供的uni.showModal()这个方法")]),i("v-uni-view",{staticClass:"h3"},[t._v("示例")]),i("pre",{staticClass:"pre html"},[t._v(""),i("element",{attrs:{contenteditable:"true"}},[t._v(t._s(t.htmlData))]),t._v(""),t._v("")]),i("v-uni-view",{staticClass:"title"},[t._v("onConfirm调用组件的 hide 方法。")]),i("pre",{staticClass:"pre js"},[t._v(""),i("element",{attrs:{contenteditable:"true"}},[t._v(t._s(t.jsData))]),t._v("")]),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"th"},[i("v-uni-text",[t._v("属性名")]),i("v-uni-text",[t._v("说明")]),i("v-uni-text",[t._v("类型")]),i("v-uni-text",[t._v("默认值")]),i("v-uni-text",[t._v("版本")])],1),i("v-uni-view",{staticClass:"td"},[i("v-uni-text",[t._v("show")]),i("v-uni-text",[t._v("显示")]),i("v-uni-text",[t._v("function")]),i("v-uni-text",[t._v("无")]),i("v-uni-text",[t._v("1.0.0")])],1),i("v-uni-view",{staticClass:"td"},[i("v-uni-text",[t._v("hide")]),i("v-uni-text",[t._v("隐藏")]),i("v-uni-text",[t._v("function")]),i("v-uni-text",[t._v("无")]),i("v-uni-text",[t._v("1.0.0")])],1),i("v-uni-view",{staticClass:"td"},[i("v-uni-text",[t._v("onCancel")]),i("v-uni-text",[t._v("取消")]),i("v-uni-text",[t._v("function")]),i("v-uni-text",[t._v("无")]),i("v-uni-text",[t._v("1.0.0")])],1),i("v-uni-view",{staticClass:"td"},[i("v-uni-text",[t._v("isShow")]),i("v-uni-text",[t._v("是否显示背景色")]),i("v-uni-text",[t._v("Boolean")]),i("v-uni-text",[t._v("true")]),i("v-uni-text",[t._v("1.0.0")])],1),i("v-uni-view",{staticClass:"td"},[i("v-uni-text",[t._v("onCancel")]),i("v-uni-text",[t._v("取消")]),i("v-uni-text",[t._v("function")]),i("v-uni-text",[t._v("无")]),i("v-uni-text",[t._v("1.0.0")])],1)],1),i("Dialogs",{ref:"Dialog"}),i("Toasts",{ref:"Toast"})],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},cf4b:function(t,e,i){"use strict";i.r(e);var n=i("21bd"),a=i("e928");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("b097");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"de1a2c4c",null);e["default"]=r.exports},e0c3:function(t,e,i){"use strict";i.r(e);var n=i("7bc2"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},e928:function(t,e,i){"use strict";i.r(e);var n=i("76c7"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a}}]);