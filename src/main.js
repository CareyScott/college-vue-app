/**
 * @Date:   2021-03-30T22:01:55+01:00
 * @Last modified time: 2021-04-07T15:04:57+01:00
 */



import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
