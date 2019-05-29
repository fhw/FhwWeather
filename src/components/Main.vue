<template>
  <div class="slide-nav">
    <md-app class="md-app" md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>

        <span class="md-title">{{headerTitle}}</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item @click="toRouter('/AllWeather')">
            <md-icon>cloud_queue</md-icon>
            <span class="md-list-item-text">近日天气预报</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <slot></slot>
      </md-app-content>
    </md-app>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      headerTitle: '',
      menuVisible: false
    }
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
    },
    toRouter (url) {
      this.$router.push(url)
      this.menuVisible = false
    }
  },
  watch: {
    '$route' () {
      this.headerTitle = this.$route.meta.name
    }
  }
}
</script>
<style lang="scss">
  .slide-nav, .md-app{
    height: 100%;
  }
</style>
