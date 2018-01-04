<template>
  <div class="index-nav">
    <div class="nav-list">
      <div class="nav-item">
        <router-link to="/AllWeather">3天天气预报</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/">天气预报</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/">天气预报</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/">天气预报</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  export default {
    // name: 'index-nav'
    created () {
      this.setHeaderTitle('首页')
    },
    methods: {
      ...mapMutations(['setHeaderTitle'])
    }
  }
</script>

<style lang="scss" scoped>
  .index-nav {
    padding-top: 10px;
    .nav-list {
      display: flex;
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      .nav-item {
        display: inline-block;
        width: 50%;
        text-align: center;
        overflow: hidden;
        a {
          display: inline-block;
          width: 90%;
          height: 30px;
          line-height: 30px;
          margin: 10px 2%;
          background-color: #2979FF;
          font-size: 14px;
          color: #ffffff;
          border-radius: 5px;
          box-shadow: 2px 2px 2px rgba(41, 121, 255, 0.5);
        }
      }
    }
  }
</style>
