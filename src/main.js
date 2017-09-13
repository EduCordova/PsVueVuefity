import Vue from 'vue'
import App from './App.vue'
import {routes} from './routes'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
//vamos a usar vuerouter


Vue.use(VueRouter)
Vue.use(Vuetify)
const router = new VueRouter({
  routes
})

new Vue({
  
  el: '#app',
  router,
  render: h => h(App)
})
