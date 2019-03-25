import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import toast from './modules/toast'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    common,
    toast
  },
  strict: debug
})
