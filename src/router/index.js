import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/components/layouts/main'
import Home from '@/components/pages/Home'
import Detail from '@/components/pages/Detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/user/:user',
          name: 'Detail',
          component: Detail
        }
      ]
    }
  ]
})
