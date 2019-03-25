<template>
  <div id="all-weather">
    <div v-for="(item1, index) in weatherData" :key="index">
      <div class="coordinates-wrap">
        <div class="coordinates"></div>
        <div class="flex-column">
          <span class="coordinates-text">{{item1.basic.location}}</span>
          <span class="coordinates-text">{{item1.update.loc}}</span>
        </div>
      </div>
      <ul class="w-list">
        <li v-for="(item2, index) in item1.daily_forecast" :key="index">
          <p>{{$dayjs(item2.date).format('M-DD')}}</p>
          <div>
            <img class="w-status-icon" :src="require(`./../../static/weatherIcon/${item2.cond_code_d}.png`)" alt="">
          </div>
          <div>
            <img class="w-status-icon" :src="require(`./../../static/weatherIcon/${item2.cond_code_n}.png`)" alt="">
          </div>
          <p>最高温度:{{item2.tmp_max}}</p>
          <p>最低温度:{{item2.tmp_min}}</p>
          <p>风向:{{item2.wind_dir}}</p>
          <p>风力:{{item2.wind_sc}}</p>
          <p>相对湿度:{{item2.hum}}</p>
          <p>紫外线强度指数:{{item2.uv_index}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import heweatherApi from '@/api/heweatherApi'
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
      this.getCurrentPosition(this.getAllWeather)
    },
    methods: {
      ...mapMutations(['showToast']),
      ...mapActions(['getCurrentPosition']),
      getAllWeather () {
        const position = this.common.currentPosition
        heweatherApi.getAllWeather({
          location: `${position.coords.longitude},${position.coords.latitude}`
        }).then((res) => {
          this.weatherData = res
        }, (error) => {
          console.log(error)
        })

        heweatherApi.getLifestyle({
          location: `${position.coords.longitude},${position.coords.latitude}`
        })
        heweatherApi.getAirNow({
          location: `${position.coords.longitude},${position.coords.latitude}`
        })
      }
    }
  }

</script>
<style lang="scss" scoped>
  #all-weather {
    font-size: px2em(12);

    .coordinates-wrap {
      display: flex;
      align-items: center;
      height: px2em(50);
      margin-top: 5px;

      .flex-column {
        margin-top: px2em(10);
      }

      .coordinates {
        width: px2em(25);
        height: px2em(25);
        background: url("./../assets/icon/coordinates.png") no-repeat center;
        background-size: contain;
      }

      .coordinates-text {
        display: inline-block;
        font-size: px2em(12);
      }
    }

    .w-list {
      list-style: none;

      li {
        margin: 0 px2em(10) px2em(10);
        padding: px2em(10);
        border: px2em(1) solid #2962ff;
        border-radius: 5px;
      }

      .w-status-icon {
        width: px2em(30);
      }
    }
  }
</style>
