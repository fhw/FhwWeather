import axios from 'axios'
const myKey = 'd2961e751d2442d1b99134794300c28e'
export default {
  /*
   * 获取3-10天天气预报
   * */
  getAllWeather (params) {
    return axios.get('https://free-api.heweather.com/s6/weather/forecast', {
      params: {
        location: params.location,
        key: myKey
      }
    })
  }
}
