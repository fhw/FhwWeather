<template>
  <div id="app">
    <Main>
      <router-view></router-view>
    </Main>
    <toast></toast>
  </div>
</template>

<script>
import Main from './components/Main'
import Toast from './components/common/Toast'
// import {mapActions} from 'vuex'

export default {
  components: {
    Main,
    Toast
  },
  created () {
  },
  methods: {}
}
</script>

<style>
  #app, body, html {
    width: 100%;
    height: 100%;
    margin: 0;
  }
</style>
