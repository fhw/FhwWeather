<template>
  <div id="slide-nav">
    <header class="index-header">
      <div class="left" @click="backFunc">
        <slot name="back"></slot>
      </div>
      <div class="middle">{{common.headerTitle}}</div>
      <div class="right"></div>
    </header>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    data () {
      return {}
    },
    mounted () {
    },
    computed: {
      ...mapState({
        common: 'common'
      })
    },
    methods: {
      backFunc () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="scss">
  #slide-nav {
    .index-header {
      display: flex;
      height: 1.3158rem;
      width: 100%;
      background-color: #2962FF;
      box-shadow: 0 0.0526rem 0.1316rem rgba(41, 98, 255, 0.5);
      .left {
        position: relative;
        width: 1.0526rem;
        height: 100%;
        flex-shrink: 0;
        img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 0.6579rem;
        }
        .header-back{
          height: 1.3158rem;
          width: 0.6579rem;
          margin-left: 0.2632rem;
          line-height: 1.3158rem;
          background: url("./../../assets/icon/back.png") no-repeat center;
          background-size: contain;
        }

      }
      .middle {
        width: 100%;
        font-size: 0.5263rem;
        text-align: center;
        line-height: 1.3158rem;
        color: #ffffff;
      }
      .right {
        width: 1.3158rem;
        height: 100%;
        flex-shrink: 0;
      }
    }

  }
</style>
