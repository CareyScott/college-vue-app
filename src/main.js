/**
 * @Date:   2021-03-30T22:01:55+01:00
 * @Last modified time: 2021-04-17T18:09:14+01:00
 */



import Vue from 'vue'
import App from './App.vue'


// import BootstrapVue from 'bootstrap-vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "vue-select/dist/vue-select.css";


// Notification Plugin
// import Vue           from 'vue'
import Notifications from 'vue-notification'

//transition plugin
import VuePageTransition from 'vue-page-transition'

//sorted tables
import SortedTablePlugin from 'vue-sorted-table'

//velocity
import velocity from 'velocity-animate'

//vue-select
import vSelect from "vue-select";

//date parse test
import VueFilterDateParse from '@vuejs-community/vue-filter-date-parse';

//layout Plugin
import { LayoutPlugin } from 'bootstrap-vue'

//tel Plugin
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'


//import moment
var moment = require('moment'); // require
moment().format();

Vue.use(LayoutPlugin)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Vue.use(Notifications)
Vue.use(VuePageTransition)
Vue.use(SortedTablePlugin)
Vue.use(Notifications, { velocity })
Vue.component("v-select", vSelect)
Vue.use(VueFilterDateParse)
Vue.use(VueTelInput)




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
