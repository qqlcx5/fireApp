import Vue from 'vue'
import App from './App'

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()



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


