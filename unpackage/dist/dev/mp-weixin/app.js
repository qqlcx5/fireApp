require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([3],[,,,,,,function(e,t,u){"use strict";(function(e){var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var u=arguments[t];for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n])}return e},n=l(u(5)),o=l(u(8)),a=l(u(12));function l(e){return e&&e.__esModule?e:{default:e}}n.default.config.productionTip=!1,n.default.prototype.$store=a.default,o.default.mpType="app",new n.default(t({store:a.default},o.default)).$mount(),n.default.prototype.ways=function(t){e.navigateTo({url:t})},n.default.prototype.backs=function(){e.navigateBack({delta:1})}}).call(t,u(2).default)},,function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(11),o=u.n(n),a=!1;var l=function(e){a||u(9)},r=u(0)(o.a,null,l,null,null);r.options.__file="C:\\Users\\Admin\\Desktop\\devFire\\App.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=r.exports},function(e,t){},,function(e,t,u){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,o=u(3),a=(n=o)&&n.__esModule?n:{default:n};t.default={onLaunch:function(){plus.screen.lockOrientation("portrait-primary"),setInterval(function(){a.default.getPush();var t=a.default.pushlistapp;if(null!=t&&""!=t){console.log(JSON.stringify(t)),plus.push.createMessage(t.pushcontent);var u=e.getStorageSync("USERS_KEY");u=JSON.parse(u);var n=plus.device.uuid;e.request({url:a.default.hosturl+"push/insertlist.html",method:"POST",data:{uuid:n,pushid:t.pushid,token:u.token},header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){e.data.code},fail:function(){}})}},5e3)},onShow:function(){plus.push.addEventListener("click",function(t){e.navigateTo({url:"/pages/train/msglist"})},!1)},onHide:function(){console.log("App Hide")}}}).call(t,u(2).default)},function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=l(u(5)),o=l(u(4)),a=l(u(13));function l(e){return e&&e.__esModule?e:{default:e}}n.default.use(o.default),t.default=new o.default.Store({modules:{user:a.default}})},function(e,t,u){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var u="USERS_KEY",n=e.getStorageSync(u),o={user:n?JSON.parse(n):null},a={login:function(t,n){t.user=n,e.setStorageSync(u,JSON.stringify(n))},loginout:function(t){t.user=null,e.removeStorageSync(u)}};t.default={state:o,mutations:a}}).call(t,u(2).default)}],[6]);
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map