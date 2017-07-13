import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AllWeather from '@/components/AllWeather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '',
          name: 'AllWeather',
          component: AllWeather
        }]
    }
  ]
})
