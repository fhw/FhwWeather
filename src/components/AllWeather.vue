<template>
  <div id="all-weather">
    <div v-for="item1 in weatherData">
      <div class="coordinates-wrap">
        <div class="coordinates"></div>
        <div class="flex-column">
          <span class="coordinates-text">{{item1.basic.location}}</span>
          <span class="coordinates-text">{{item1.update.loc}}</span>
        </div>
      </div>
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
  import {mapState, mapMutations, mapActions} from 'vuex'

  export default {
    data () {
      return {
        weatherData: {}
      }
    },
    computed: {
      ...mapState(['common'])
    },
    created () {
      this.setHeaderTitle('近三天天气预报')
      this.getAllWeather()
    },
    methods: {
      ...mapMutations(['setHeaderTitle']),
      ...mapActions(['getCurrentPosition']),
      getAllWeather: function () {
        const self = this
        const position = self.common.currentPosition
        self.getCurrentPosition().then(() => {
          api.getAllWeather({
            location: `${position.coords.longitude},${position.coords.latitude}`
          }).then(function (res) {
            self.weatherData = res.data.HeWeather6
          }, (error) => {
            console.log(error)
          })
        })
      }
    }
  }

</script>
<style lang="scss">
  /*@import './../assets/styles/reset.scss';*/
  #all-weather {
    .coordinates-wrap {
      display: flex;
      height: 1.2526rem;
      margin-top: $fs-10/2;

      .flex-column{
        margin-top: 10px;
      }

      .coordinates {
        width: 1.2526rem;
        height: 1.2526rem;
        background: url("./../assets/icon/coordinates.png") no-repeat center center;
        background-size: 0.65rem 0.65rem;
      }
      .coordinates-text {
        display: inline-block;
        /*line-height: 0.6263rem;*/
        font-size: 0.325rem;
      }
    }

  }
</style>
