require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{52:function(t,e,i){"use strict";var s=n(i(1)),a=n(i(53));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},53:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(55),a=i.n(s),n=i(56);var o=function(t){i(54)},l=i(0)(a.a,n.a,o,null,null);e.default=l.exports},54:function(t,e){},55:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s,a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},n=i(3),o=(s=n)&&s.__esModule?s:{default:s},l=i(4);e.default={data:function(){return{lifedetail:[],showVideo:!1,baseurl:"",imgurl:"",imageList:[],bigimg:"",bannerShow:!1}},onBackPress:function(){if(this.bannerShow)return this.bannerShow=!1,!0},computed:a({},(0,l.mapState)(["user"])),methods:{closeBanner:function(){this.bannerShow=!1},showbigvideo:function(){console.log("abcdefg")},showBanner:function(t){console.log(t),this.bigimg=t,this.bannerShow=!0},getdetail:function(){var e=this;t.request({url:o.default.hosturl+"life/detail.html",method:"POST",data:{token:this.user.user.token,lifeid:this.lifeid},header:{"content-type":"application/x-www-form-urlencoded"},success:function(i){console.log(JSON.stringify(i.data)),0==i.data.code?(e.lifedetail=i.data.detail,e.baseurl=i.data.baseurl,e.imgurl=i.data.detail.lifeimage.split(",")):t.showToast({icon:"none",title:"出错啦，请联系客服"})},fail:function(){t.showToast({icon:"none",title:"网络错误"})}})},previewImage:function(e){this.imageList,t.previewImage({current:current,urls:this.imageList})}},onLoad:function(t){this.lifeid=t.lifeid,this.getdetail(),console.log(this.baseurl),console.log(this.imgurl)}}}).call(e,i(2).default)},56:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"page"},[i("view",{staticClass:"header"},[i("view",{staticClass:"header-left",attrs:{eventid:"Sei-0"},on:{tap:function(e){t.backs()}}},[i("text",{staticClass:"icon"},[t._v("")])]),i("view",{staticClass:"header-content"},[t._v("\n\t\t\t任务完成情况\n\t\t")]),i("view",{staticClass:"header-right"})]),i("view",{staticClass:"tab-title"},[i("view",{staticClass:"tab ",class:{select:!t.showVideo},attrs:{eventid:"ejO-1"},on:{click:function(e){t.showVideo=!1}}},[t._v("照片")]),i("view",{staticClass:"tab ",class:{select:t.showVideo},attrs:{eventid:"Y4P-2"},on:{click:function(e){t.showVideo=!0}}},[t._v("视频")])]),t.showVideo?i("view",[i("view",{staticClass:"imgList"},[i("view",{staticClass:"img-item",attrs:{eventid:"orQ-4"},on:{click:function(e){t.showbigvideo(t.baseurl+t.lifedetail.lifevideo)}}},[i("video",{staticClass:"imgsize",staticStyle:{width:"400px"},attrs:{src:t.baseurl+t.lifedetail.lifevideo,mode:""}})])])]):i("view",[i("view",{staticClass:"imgList"},t._l(t.imgurl,function(e,s){return i("view",{key:s,staticClass:"img-item"},[i("image",{staticClass:"imgsize",attrs:{src:t.baseurl+e,mode:"",eventid:"iBY-3-"+s},on:{tap:function(i){t.showBanner(t.baseurl+e)}}})])}))]),i("view",{staticClass:"remarks"},[i("view",{staticClass:"remarks-title"},[t._v("\n\t\t\t备注消息\n\t\t")]),i("view",{staticClass:"remarks-content"},[i("text",{attrs:{decode:"true"}},[t._v("\n\t\t\t\t  "+t._s(t.lifedetail.lifecontent)+"\n\t\t\t")])])]),t.bannerShow?i("view",{staticClass:"graces-banner"},[i("view",[i("image",{staticStyle:{width:"100%","border-radius":"12px",overflow:"hidden"},attrs:{src:t.bigimg,mode:"widthFix"}})])]):t._e(),t.bannerShow?i("view",{staticClass:"graces-mask",attrs:{eventid:"1U9-5"},on:{tap:t.closeBanner}}):t._e()])},staticRenderFns:[]};e.a=s}},[52]);