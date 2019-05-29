const state = {
  currentPosition: {
    coords: {
      longitude: '',
      latitude: ''
    }
  }
}
const getters = {}
const actions = {
  getCurrentPosition ({ commit, state }, successCallback) {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        commit('setCurrentPosition', position)
        successCallback()
      }, (error) => {
        let msg = ''
        switch (error.code) {
          case error.PERMISSION_DENIED:
            msg = '用户拒绝对获取地理位置的请求。'
            break
          case error.POSITION_UNAVAILABLE:
            msg = '位置信息是不可用的。'
            break
          case error.TIMEOUT:
            msg = '请求用户地理位置超时。'
            break
          case error.UNKNOWN_ERROR:
            msg = '未知错误。'
            break
          default :
            msg = '未知错误。'
            break
        }
        commit('showToast', msg)
      })
    } else {
      console.log('浏览器不支持位置信息获取')
    }
  }
}
const mutations = {
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
