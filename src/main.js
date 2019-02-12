import Vue from 'vue'
import App from './App'
import router from './router';
import store from "./store";

Vue.config.productionTip = false
import "../static/css/base.css";
import http from "./api/http"
Vue.use( http)

import "../node_modules/swiper/dist/css/swiper.css"
new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  template: '<App/>'
})
