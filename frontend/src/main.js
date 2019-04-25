import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './http'
import animate from 'animate.css'

Vue.config.productionTip = false
Vue.use(animate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
