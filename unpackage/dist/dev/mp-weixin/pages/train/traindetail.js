require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{52:function(e,t,i){"use strict";var s=n(i(1)),a=n(i(53));function n(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(a.default))},53:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(55),a=i.n(s),n=i(56),o=!1;var r=function(e){o||i(54)},l=i(0)(a.a,n.a,r,null,null);l.options.__file="C:\\Users\\Admin\\Desktop\\devFire\\pages\\train\\traindetail.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] traindetail.vue: functional components are not supported with templates, they should use render functions."),t.default=l.exports},54:function(e,t){},55:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var s,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},n=i(3),o=(s=n)&&s.__esModule?s:{default:s},r=i(4);t.default={data:function(){return{lifedetail:[],showVideo:!1,baseurl:"",imgurl:"",imageList:[],bigimg:"",bannerShow:!1}},onBackPress:function(){if(this.bannerShow)return this.bannerShow=!1,!0},computed:a({},(0,r.mapState)(["user"])),methods:{closeBanner:function(){this.bannerShow=!1},showbigvideo:function(){console.log("abcdefg")},showBanner:function(e){console.log(e),this.bigimg=e,this.bannerShow=!0},getdetail:function(){var t=this;e.request({url:o.default.hosturl+"life/detail.html",method:"POST",data:{token:this.user.user.token,lifeid:this.lifeid},header:{"content-type":"application/x-www-form-urlencoded"},success:function(i){console.log(JSON.stringify(i.data)),0==i.data.code?(t.lifedetail=i.data.detail,t.baseurl=i.data.baseurl,t.imgurl=i.data.detail.lifeimage.split(",")):e.showToast({icon:"none",title:"出错啦，请联系客服"})},fail:function(){e.showToast({icon:"none",title:"网络错误"})}})},previewImage:function(t){this.imageList,e.previewImage({current:current,urls:this.imageList})}},onLoad:function(e){this.lifeid=e.lifeid,this.getdetail(),console.log(this.baseurl),console.log(this.imgurl)}}}).call(t,i(2).default)},56:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"page"},[i("view",{staticClass:"header"},[i("view",{staticClass:"header-left",attrs:{eventid:"PI1-0"},on:{tap:function(t){e.backs()}}},[i("text",{staticClass:"icon"},[e._v("")])]),i("view",{staticClass:"header-content"},[e._v("\n\t\t\t任务完成情况\n\t\t")]),i("view",{staticClass:"header-right"})]),i("view",{staticClass:"tab-title"},[i("view",{staticClass:"tab ",class:{select:!e.showVideo},attrs:{eventid:"9Te-1"},on:{click:function(t){e.showVideo=!1}}},[e._v("照片")]),i("view",{staticClass:"tab ",class:{select:e.showVideo},attrs:{eventid:"fet-2"},on:{click:function(t){e.showVideo=!0}}},[e._v("视频")])]),e.showVideo?i("view",[i("view",{staticClass:"imgList"},[i("view",{staticClass:"img-item",attrs:{eventid:"EYK-4"},on:{click:function(t){e.showbigvideo(e.baseurl+e.lifedetail.lifevideo)}}},[i("video",{staticClass:"imgsize",staticStyle:{width:"400px"},attrs:{src:e.baseurl+e.lifedetail.lifevideo,mode:""}})])])]):i("view",[i("view",{staticClass:"imgList"},e._l(e.imgurl,function(t,s){return i("view",{key:s,staticClass:"img-item"},[i("image",{staticClass:"imgsize",attrs:{src:e.baseurl+t,mode:"",eventid:"Vvc-3-"+s},on:{tap:function(i){e.showBanner(e.baseurl+t)}}})])}))]),i("view",{staticClass:"remarks"},[i("view",{staticClass:"remarks-title"},[e._v("\n\t\t\t备注消息\n\t\t")]),i("view",{staticClass:"remarks-content"},[i("text",{attrs:{decode:"true"}},[e._v("\n\t\t\t\t  "+e._s(e.lifedetail.lifecontent)+"\n\t\t\t")])])]),e.bannerShow?i("view",{staticClass:"graces-banner"},[i("view",[i("image",{staticStyle:{width:"100%","border-radius":"12px",overflow:"hidden"},attrs:{src:e.bigimg,mode:"widthFix"}})])]):e._e(),e.bannerShow?i("view",{staticClass:"graces-mask",attrs:{eventid:"c0e-5"},on:{tap:e.closeBanner}}):e._e()])};s._withStripped=!0;var a={render:s,staticRenderFns:[]};t.a=a}},[52]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/train/traindetail.js.map