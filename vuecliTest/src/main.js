// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'  //引入vue-router
import elenemtui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "babel-polyfill"

Vue.config.productionTip = false
Vue.use(elenemtui); 
 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
