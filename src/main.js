/**
 * @Date:   2021-03-30T22:01:55+01:00
 * @Last modified time: 2021-04-14T22:58:49+01:00
 */



import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Notification Plugin
// import Vue           from 'vue'
import Notifications from 'vue-notification'

//transition plugin
import VuePageTransition from 'vue-page-transition'

//sorted tables
import SortedTablePlugin from 'vue-sorted-table'

Vue.use(BootstrapVue)
Vue.use(Notifications)
Vue.use(VuePageTransition)
Vue.use(SortedTablePlugin)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
