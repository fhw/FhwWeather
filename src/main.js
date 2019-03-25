// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'amfe-flexible'
import 'normalize.css'
import './assets/styles/reset.css'
import dayjs from 'dayjs'

import {
  MdDialog,
  MdSnackbar,
  MdButton,
  MdIcon,
  MdApp,
  MdList,
  MdDrawer,
  MdToolbar,
  MdContent
} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdDialog)
Vue.use(MdSnackbar)
Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdApp)
Vue.use(MdList)
Vue.use(MdDrawer)
Vue.use(MdToolbar)
Vue.use(MdContent)

Vue.config.productionTip = false

Vue.prototype.$dayjs = dayjs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
