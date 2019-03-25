import axios from 'axios'
import store from './../store'

const myKey = 'd2961e751d2442d1b99134794300c28e'

const http = axios.create({
  baseURL: '/s6',
  params: {
    key: myKey
  }
})

// request拦截
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// response拦截
http.interceptors.response.use(function (response) {
  // Do something with response data
  const status = response.data.HeWeather6[0].status
  switch (status) {
    case 'ok':
      return response.data.HeWeather6
    case 'invalid key':
      store.commit('showToast', {text: '无效的key，请检查你的key是否输入以及是否输入有误', options: {isInfinity: true}})
      break
    case 'invalid key type' :
      store.commit('showToast', {text: '你输入的key不适用于当前获取数据的方式', options: {isInfinity: true}})
      break
    case 'invalid param' :
      store.commit('showToast', {text: '无效的参数，请检查你传递的参数是否正确、完整', options: {isInfinity: true}})
      break
    case 'bad bind' :
      store.commit('showToast', {text: '错误的绑定，例如绑定的package name、bundle id或IP地址不一致的时候', options: {isInfinity: true}})
      break
    case 'no data for this location' :
      store.commit('showToast', {text: '该城市/地区没有你所请求的数据', options: {isInfinity: true}})
      break
    case 'no more requests' :
      store.commit('showToast', {text: '超过访问次数，需要等到当月最后一天24点（免费用户为当天24点）后进行访问次数的重置或升级你的访问量', options: {isInfinity: true}})
      break
    case 'no balance':
      store.commit('showToast', {text: '没有余额，你的按量计费产品由于余额不足或欠费而不能访问，请尽快充值', options: {isInfinity: true}})
      break
    case 'too fast' :
      store.commit('showToast', {text: '超过限定的QPM，请参考QPM说明', options: {isInfinity: true}})
      break
    case 'dead' :
      store.commit('showToast', {text: '无响应或超时，接口服务异常请联系我们', options: {isInfinity: true}})
      break
    case 'permission denied' :
      store.commit('showToast', {text: '无访问权限，你没有购买你所访问的这部分服务', options: {isInfinity: true}})
      break
    case 'sign error':
      store.commit('showToast', {text: '签名错误，请参考签名算法', options: {isInfinity: true}})
      break
    default:
      return response.data.HeWeather6
  }
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default {
  /*
   * 获取3-10天天气预报
   * */
  getAllWeather (params) {
    return http.get('/weather/forecast', {
      params
    })
  },
  /*
   * 获取3-10天天气预报
   * */
  getAirNow (params) {
    return http.get('/air/now', {
      params
    })
  },
  /*
   * 获取3-10天天气预报
   * */
  getLifestyle (params) {
    return http.get('/weather/lifestyle', {
      params
    })
  }
}
