require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([24],{34:function(t,e,a){"use strict";var s=n(a(0)),i=n(a(35));function n(t){return t&&t.__esModule?t:{default:t}}new s.default(i.default).$mount()},35:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(37),i=a.n(s),n=a(38),r=!1;var c=function(t){r||a(36)},l=a(1)(i.a,n.a,c,null,null);l.options.__file="C:\\Users\\admin\\Desktop\\fireApp\\pages\\basics\\qingjiawaichu.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] qingjiawaichu.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},36:function(t,e){},37:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{array:["病假","事假","年假"],textValue:0,startdate:"2018-01-01",enddate:"2018-05-08",starttime:"09:00",endtime:"09:00"}},methods:{goback:function(){t.navigateBack({delta:1})},goTo:function(e){t.navigateTo({url:e})},textChange:function(t){console.log(t.detail.value),this.textValue=t.detail.value},startdateChange:function(t){this.startdate=t.detail.value},starttimeChange:function(t){this.starttime=t.detail.value},endtimeChange:function(t){this.endtime=t.detail.value},enddateChange:function(t){this.enddate=t.detail.value}}}}).call(e,a(2).default)},38:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"page"},[a("view",{staticClass:"header"},[a("view",{staticClass:"header-left",attrs:{eventid:"Goc-0"},on:{click:function(e){t.goback()}}},[a("text",{staticClass:"icon"},[t._v("")])]),t._v(" "),a("view",{staticClass:"header-content"},[t._v("\n      请假\n    ")]),t._v(" "),t._m(0)]),t._v(" "),a("view",[a("view",{staticClass:"list"},[a("view",{staticClass:"item"},[a("view",{staticClass:"border"},[a("picker",{staticClass:"picker-item",attrs:{mode:"selector",range:t.array,eventid:"oIV-1"},on:{change:t.textChange}},[a("view",[a("text",{staticClass:"picker-name"},[t._v("请假类型")]),t._v(t._s(t.array[t.textValue]))])])],1)])]),t._v(" "),a("view",{staticClass:"list"},[t._m(1),t._v(" "),a("view",{staticClass:"item"},[a("view",{staticClass:"border"},[a("picker",{staticClass:"picker-item",attrs:{mode:"date",start:"2018-01-01",end:"2019-01-01",eventid:"yD3-2"},on:{change:t.startdateChange}},[a("view",[a("text",{staticClass:"picker-name"},[t._v("开始日期")]),t._v(t._s(t.startdate))])])],1)]),t._v(" "),a("view",{staticClass:"item"},[a("view",{staticClass:"border"},[a("picker",{staticClass:"picker-item",attrs:{mode:"time",start:"08:00",end:"20:00",eventid:"Q62-3"},on:{change:t.starttimeChange}},[a("view",[a("text",{staticClass:"picker-name"},[t._v("开始时间")]),t._v(t._s(t.starttime))])])],1)]),t._v(" "),a("view",{staticClass:"item"},[a("view",{staticClass:"border"},[a("picker",{staticClass:"picker-item",attrs:{mode:"date",start:"2018-01-01",end:"2019-01-01",eventid:"Z8B-4"},on:{change:t.enddateChange}},[a("view",[a("text",{staticClass:"picker-name"},[t._v("结束日期")]),t._v(t._s(t.enddate))])])],1)]),t._v(" "),a("view",{staticClass:"item"},[a("view",{staticClass:"border"},[a("picker",{staticClass:"picker-item",attrs:{mode:"time",start:"08:00",end:"20:00",eventid:"JdO-5"},on:{change:t.endtimeChange}},[a("view",[a("text",{staticClass:"picker-name"},[t._v("结束时间")]),t._v(t._s(t.endtime))])])],1)])]),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),t._m(4)])};s._withStripped=!0;var i={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"header-right"},[e("text",{staticClass:"icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"item"},[e("view",{staticClass:"border"},[e("text",[this._v("请假时间")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"list"},[e("view",{staticClass:"item"},[e("view",{staticClass:"border"},[e("text",[this._v("请假事由")])])]),this._v(" "),e("view",{staticClass:"item-textarea"},[e("textarea",{attrs:{placeholder:"请输入公差事由",maxlength:"200"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"list"},[e("view",{staticClass:"picture"},[e("text",{staticClass:"picture-name"},[this._v("图片")]),this._v(" "),e("text",{staticClass:"addIcon"},[this._v("")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"submit"},[e("view",{staticClass:"btn"},[this._v("\n      提交\n    ")])])}]};e.a=i}},[34]);
//# sourceMappingURL=../../.sourcemap/pages/basics/qingjiawaichu.js.map