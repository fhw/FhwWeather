import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
// import IndexNav from '@/components/IndexNav'
// import AllWeather from '@/components/AllWeather'

Vue.use(Router)

function errorComponent () {
  console.log('组件加载失败')
}

const IndexNav = () => import('@/components/IndexNav.vue').catch(() => {
  errorComponent()
})
const AllWeather = () => import('@/components/AllWeather.vue').catch(() => {
  errorComponent()
})

export default new Router({
  routes: [
    {
      path: '',
      name: 'IndexNav',
      component: IndexNav
    },
    {
      path: '/AllWeather',
      name: 'AllWeather',
      component: AllWeather
    }
  ]
})
