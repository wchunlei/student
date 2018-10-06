import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home'
import register from '@/components/user/register'
import verify from '@/components/user/verify'
import registerInfo from '@/components/user/registerInfo'
import userInfo from '@/components/user/userInfo'
import calendar from '@/components/user/calendar'
import record from '@/components/user/record'
import active from '@/components/user/active'
import orderInfo from '@/components/user/orderInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/verify',
      name: 'verify',
      component: verify
    },
    {
      path: '/registerInfo',
      name: 'registerInfo',
      component: registerInfo
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: userInfo
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: calendar
    },
    {
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/active',
      name: 'active',
      component: active
    },{
      path: '/orderInfo',
      name: 'orderInfo',
      component: orderInfo
    }
  ]
})
