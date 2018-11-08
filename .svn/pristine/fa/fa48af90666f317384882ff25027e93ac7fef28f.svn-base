import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


App.mpType = 'app'
Vue.prototype.ways = function(url) {
  uni.navigateTo({
    url: url
  })
}
Vue.prototype.backs = function() {
  uni.navigateBack({
    delta: 1
  })
}
const app = new Vue({
  ...App
})
app.$mount()
