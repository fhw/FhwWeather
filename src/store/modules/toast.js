const state = {
  options: {
    position: 'center',
    duration: 2000,
    isInfinity: false
  },
  content: '',
  show: false
}
const getters = {}
const actions = {}
const mutations = {
  setShow (state, data) {
    state.show = data
  },
  showToast (state, data) {
    state.content = data.text ? data.text : data
    if (data.options) {
      state.options = data.options
    }
    state.show = true
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
