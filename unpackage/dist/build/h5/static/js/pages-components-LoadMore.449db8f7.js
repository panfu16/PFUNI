(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-LoadMore"],{"00ab":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"bnt",on:{click:function(e){e=t.$handleEvent(e),t.goto("../loadmore/loading")}}},[t._v("加载更多")]),n("v-uni-view",{staticClass:"h2"},[t._v("Toast")]),n("v-uni-view",{staticClass:"tip"},[t._v("Toast组件主要用于非模态信息提醒，无需用户交互。")]),n("v-uni-view",[n("strong",[t._v("注:")]),t._v("由于此组件基于PFUIN实现，所以在使用之前，请确保自己了解过")]),n("v-uni-view",{staticClass:"h3"},[t._v("示例")]),n("pre",{staticClass:"pre html"},[t._v(""),n("element",{attrs:{contenteditable:"true"}},[t._v(t._s(t.htmlData))]),t._v(""),t._v("")]),n("v-uni-view",{staticClass:"title"},[t._v("基本用法")]),n("pre",{staticClass:"pre js"},[t._v(""),n("element",{attrs:{contenteditable:"true"}},[t._v(t._s(t.jsData2))]),t._v("")]),n("v-uni-view",{staticClass:"title"},[t._v("time 字段决定了 Toast 显示的时间，如果设置为 0，则不会消失，需要手动调用组件的 hide 方法。")]),n("pre",{staticClass:"pre js"},[t._v(""),n("element",{attrs:{contenteditable:"true"}},[t._v(t._s(t.jsData))]),t._v("")]),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"th"},[n("v-uni-text",[t._v("属性名")]),n("v-uni-text",[t._v("说明")]),n("v-uni-text",[t._v("类型")]),n("v-uni-text",[t._v("默认值")]),n("v-uni-text",[t._v("版本")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("info")]),n("v-uni-text",[t._v("轮播图的数据，通过数组长度决定指示点个数")]),n("v-uni-text",[t._v("Array")]),n("v-uni-text",[t._v("无")]),n("v-uni-text",[t._v("1.0.0")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("current")]),n("v-uni-text",[t._v("当前指示点索引，必须是通过 swiper 的 change 事件获取到的 e.detail.current")]),n("v-uni-text",[t._v("Number")]),n("v-uni-text",[t._v("0")]),n("v-uni-text",[t._v("1.0.0")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("dotsStyles")]),n("v-uni-text",[t._v("指示点样式")]),n("v-uni-text",[t._v("Object")]),n("v-uni-text",[t._v("无")]),n("v-uni-text",[t._v("1.0.0")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("mode")]),n("v-uni-text",[t._v("指示点的类型，可选值：default 、 indexes 、 long 、nav")]),n("v-uni-text",[t._v("String")]),n("v-uni-text",[t._v("default")]),n("v-uni-text",[t._v("1.0.0")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("field")]),n("v-uni-text",[t._v("mode 为 nav 时，显示的内容字段（mode = nav 时必填）")]),n("v-uni-text",[t._v("String")]),n("v-uni-text",[t._v("无")]),n("v-uni-text",[t._v("1.0.0")])],1)],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"2cd6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},data:function(){return{items:[{name:"小張",export:"我是小明不是小张"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"},{name:"小明",export:"我是小张不是小明呀~~~"}],htmlData:'<view @click="showToast"></view>',jsData:'export default {methods: {\n\t\t\t\tshowToast() {\n\t\t\t\t this.$refs.Toast.show({message:"提示信息",duration:0,position:"bottom",icon:true});\n\t\t\t\t}\n\t\t\t  }\n\t\t\t}',jsData2:'export default {methods: {\n\t\t\t\tshowToast() {\n\t\t\t\t this.$refs.Toast.show("提示信息")\n\t\t\t\t}\n\t\t\t  }\n\t\t\t}',isShow:!1,page:1}},onLoad:function(t){},created:function(){},methods:{goto:function(t){uni.navigateTo({url:t})}}};e.default=i},"49f5":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-55a98260]{padding:%?40?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?14?%}.content .bnt[data-v-55a98260]{position:relative;width:100%;background:#2b9939;color:#fff;height:%?60?%;line-height:%?60?%;margin:0 auto %?40?%;text-align:center;font-size:%?16?%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.content .h2[data-v-55a98260]{font-size:%?24?%;margin-bottom:%?10?%;font-weight:700}.content .h3[data-v-55a98260]{font-size:%?20?%;margin:%?20?% auto;font-weight:700;color:red}.content .tip[data-v-55a98260]{font-size:%?14?%;text-indent:%?15?%;margin:%?20?% auto}.content .pre[data-v-55a98260]{background:#eee;color:#000;padding:%?20?% %?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin-bottom:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:auto;word-wrap:normal}.content .pre element[data-v-55a98260]{width:100%;display:block;height:100%}.content .pre .isCopy[data-v-55a98260]{position:absolute;right:%?10?%;bottom:%?5?%;background:#55a532;color:#fff;padding:%?5?%;-webkit-border-radius:%?2?%;border-radius:%?2?%}.content .html[data-v-55a98260],.content .js[data-v-55a98260]{position:relative}.content .html[data-v-55a98260]:before{content:"HTML";position:absolute;top:0;right:%?12?%;color:#999}.content .js[data-v-55a98260]:before{content:"JS";position:absolute;top:0;right:%?12?%;color:#999}.content .title[data-v-55a98260]{margin:%?20?% auto}.content .list[data-v-55a98260]{border:%?1?% solid #eee;border-right:0;border-bottom:0;margin:%?20?% auto}.content .list .th[data-v-55a98260]{background:#f8f8f8;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content .list .th uni-text[data-v-55a98260]{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:%?50?%;line-height:%?50?%;text-align:center;border-right:%?1?% solid #eee}.content .list .td[data-v-55a98260]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content .list .td uni-text[data-v-55a98260]{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;min-height:%?50?%;line-height:%?50?%;border-right:%?1?% solid #eee;border-bottom:%?1?% solid #eee;padding:%?20?% auto;overflow:hidden}.content .loade-more-con[data-v-55a98260]{background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-bottom:%?1?% solid #eee}.content .loade-more-con .left[data-v-55a98260]{width:20%}.content .loade-more-con .left .img[data-v-55a98260]{background:#eee;height:%?80?%;width:%?80?%;margin:0 auto}.content .loade-more-con .right[data-v-55a98260]{width:80%}',""])},"591c":function(t,e,n){"use strict";n.r(e);var i=n("2cd6"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},b412:function(t,e,n){"use strict";var i=n("b607"),a=n.n(i);a.a},b607:function(t,e,n){var i=n("49f5");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("d1d5cd54",i,!0,{sourceMap:!1,shadowMode:!1})},c8cd:function(t,e,n){"use strict";n.r(e);var i=n("00ab"),a=n("591c");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("b412");var r=n("2877"),s=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"55a98260",null);e["default"]=s.exports}}]);