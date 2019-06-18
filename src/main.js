import Vue from 'vue'
import 'lib-flexible/flexible.js'
import App from './App'
import store from './vuex/store'
import './mock/mock-serve'
import router from './router/index'

Vue.config.productionTip = false

// 注册全局组件



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
