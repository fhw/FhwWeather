<template>
  <div class="index-nav">
    <div class="nav-list">
      <div class="nav-item">
        <router-link to="/AllWeather">近日天气预报</router-link>
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

export default {
  // name: 'index-nav'
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .index-nav {
    padding-top: 0.2632rem;
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
          height: 0.7895rem;
          line-height: 0.7895rem;
          margin: 0.2632rem 2%;
          background-color: #2979FF;
          font-size: 0.3684rem;
          color: #ffffff;
          border-radius: 0.1316rem;
          box-shadow: 0.0526rem 0.0526rem 0.0526rem rgba(41, 121, 255, 0.5);
          text-decoration: none;
        }
      }
    }
  }
</style>
