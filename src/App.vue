<template>
  <div id="app">
    <IndexHeader>
      <div class="header-back" slot="back">
      </div>
    </IndexHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import IndexHeader from './components/common/Header.vue'
  // import {mapActions} from 'vuex'
  //  import footer from 'components'
  export default {
    components: {
      IndexHeader
    },
    created () {
    },
    methods: {
    }
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
