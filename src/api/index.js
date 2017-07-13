import axios from 'axios'
const myKey = 'd2961e751d2442d1b99134794300c28e'
export default {
  /*
   * 获取和风天气全部天气信息
   * */
  getAllWeather (params) {
    return axios.get('https://free-api.heweather.com/v5/weather', {
      params: {
        city: params.city,
        key: myKey
      }
    })
  }
}
