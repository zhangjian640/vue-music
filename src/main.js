import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

fastclick.attach(document.body)

Vue.config.productionTip = false

import 'common/stylus/index.styl'

Vue.use(VueLazyLoad, {
  loading: require('common/images/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
