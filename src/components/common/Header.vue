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
      height: 50px;
      width: 100%;
      background-color: #2962FF;
      box-shadow: 0 2px 5px rgba(41, 98, 255, 0.5);
      .left {
        position: relative;
        width: 40px;
        height: 100%;
        flex-shrink: 0;
        img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 25px;
        }
        .header-back{
          height: 50px;
          width: 25px;
          margin-left: 10px;
          line-height: 50px;
          background: url("./../../assets/icon/back.png") no-repeat center;
          background-size: contain;
        }

      }
      .middle {
        width: 100%;
        font-size: 20px;
        text-align: center;
        line-height: 50px;
        color: #ffffff;
      }
      .right {
        width: 50px;
        height: 100%;
        flex-shrink: 0;
      }
    }

  }
</style>
