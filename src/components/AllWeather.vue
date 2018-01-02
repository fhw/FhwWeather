<template>
  <div id="all-weather">
    <div v-for="item1 in weatherData">
      <div class="bg">{{item1.basic.location}}</div>
      <ul>
        <li v-for="item2 in item1.daily_forecast">
          <p>预报日期:{{item2.date}}</p>
          <p>日出时间:{{item2.sr}}</p>
          <p>日落时间:{{item2.ss}}</p>
          <p>月升时间:{{item2.mr}}</p>
          <p>月落时间:{{item2.ms}}</p>
          <p>最高温度:{{item2.tmp_max}}</p>
          <p>最低温度:{{item2.tmp_min}}</p>
          <p>
            <img :src="`./../../static/weatherIcon/${item2.cond_code_d}.png`" alt="">
          </p>
        </li>
      </ul>
    </div>


  </div>
</template>
<script>
  import api from './../api/index'

  export default {
    data () {
      return {
        weatherData: {}
      }
    },
    methods: {
      getAllWeather: function () {
        const that = this
        if ('geolocation' in navigator) {
          /* 地理位置服务可用 */
          navigator.geolocation.getCurrentPosition((position) => {
            api.getAllWeather({
              location: `${position.coords.longitude},${position.coords.latitude}`
              // location: 'beijing'
            }).then(function (res) {
              that.weatherData = res.data.HeWeather6
              console.log(that.weatherData)
            })
          }, (error) => {
            console.log(error)
          })
          console.log('地理位置服务可用')
        } else {
          /* 地理位置服务不可用 */
          console.log('地理位置服务不可用')
        }
      }
    },
    created () {
      this.getAllWeather()
    }
  }

</script>
<style lang="scss">
  /*@import './../assets/styles/reset.scss';*/
</style>
