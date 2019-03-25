<template>
  <md-snackbar :md-position="toast.options.position"
               :md-duration="toast.options.isInfinity ? Infinity : toast.options.duration"
               :md-active.sync="show" md-persistent>
    <div class="content">{{toast.content}}</div>
    <md-button class="md-icon-button md-dense md-primary" @click="setShow(false)">
      <md-icon>close</md-icon>
    </md-button>
  </md-snackbar>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'

  export default {
    data () {
      return {
        show: false
      }
    },
    computed: {
      ...mapState(['toast'])
    },
    methods: {
      ...mapMutations(['setShow'])
    },
    watch: {
      'toast.show' (val) {
        this.show = val
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    font-size: px2em(14);
  }
</style>
