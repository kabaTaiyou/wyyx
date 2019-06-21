import Vue from 'vue'
import 'lib-flexible/flexible.js'
import VueLazyLoad from 'vue-lazyload'
// const VueLazyLoad = require("vue-lazyload");
import lazyImg from '../src/common/lazy2.gif'
import App from './App'
import store from './vuex/store'
import './mock/mock-serve'
import router from './router/index'
Vue.config.productionTip = false

// 注册全局组件

// Vue.use(VueLazyload)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: lazyImg,
  loading: lazyImg,
  attempt: 1
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
