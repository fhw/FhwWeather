<template>
  <div id="all-weather">
    {{weatherData }}
  </div>
</template>
<script>
  import api from './../api/index'
  export default{
    data () {
      return {
        weatherData: {}
      }
    },
    methods: {
      getAllWeather: function () {
        if ('geolocation' in navigator) {
          /* 地理位置服务可用 */
          navigator.geolocation.getCurrentPosition(function (position) {
            console.log(123)
            api.getAllWeather({
              city: `${position.coords.longitude},${position.coords.latitude}`
            }).then(function (res) {
              console.log(res.data)
            })
          }, function (error) {
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

</style>
