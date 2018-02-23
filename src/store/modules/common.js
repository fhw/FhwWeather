const state = {
  headerTitle: '',
  currentPosition: {
    coords: {
      longitude: '39.90498734',
      latitude: '116.4052887'
    }
  }
}
const getters = {}
const actions = {
  getCurrentPosition ({commit, state}) {
    if ('geolocation' in navigator) {
      return navigator.geolocation.getCurrentPosition((position) => {
        // position.coords.longitude
        // position.coords.latitude
        commit('setCurrentPosition', position)
        console.log(position)
      }, (error) => {
        commit('setCurrentPosition', state.currentPosition)
        console.log(error)
      })
    } else {
      return new Promise((resolve, reject) => {
      })
    }
  }
}
const mutations = {
  // 设置header标题
  setHeaderTitle: (state, data) => {
    state.headerTitle = data
  },
  setCurrentPosition (state, data) {
    state.currentPosition = !data ? state.currentPosition : data
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
