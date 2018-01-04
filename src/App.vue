<template>
  <div id="app">
    <IndexHeader>
      <img slot="back" src="./assets/icon/back.png" alt="">
    </IndexHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import IndexHeader from './components/common/Header.vue'
  //  import footer from 'components'
  export default {
    components: {
      IndexHeader
    },
    name: 'app'
  }
</script>

<style>
  #app, body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: #fafafa;
  }
</style>
