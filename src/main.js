import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/scss/custom.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import AsyncComputed from 'vue-async-computed'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(AsyncComputed)

Vue.use('vue-moment')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
