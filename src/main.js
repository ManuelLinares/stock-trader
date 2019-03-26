import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import routes from "./routes";
import store from "./store/store";
import VueResource from 'vue-resource';

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.options.root = 'https://vuejs-test-e41f0.firebaseio.com/data'

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.filter('currency', val => `$${val.toLocaleString()}`)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
