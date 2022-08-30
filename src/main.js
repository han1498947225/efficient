import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import fullscreen from 'vue-fullscreen'
import http from './utils/http'

Vue.prototype.$http = http
Vue.use(ElementUI)
Vue.use(fullscreen)
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app')
