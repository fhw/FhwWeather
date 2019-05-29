import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
// import IndexNav from '@/components/IndexNav'
// import AllWeather from '@/components/AllWeather'

Vue.use(Router)

function errorComponent () {
  console.log('组件加载失败')
}

function syncComponent (name) {
  return import(/* webpackChunkName: "[request][index]" */ `../components/${name}`).catch(() => {
    errorComponent()
  })
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'IndexNav',
      component: syncComponent('IndexNav'),
      meta: {
        name: '首页'
      }
    },
    {
      path: '/AllWeather',
      name: 'AllWeather',
      component: syncComponent('AllWeather'),
      meta: {
        name: '近日天气预报'
      }
    }
  ]
})
