import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/views/Login'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', name: 'login', component: () => import('@/views/Login') },
    {
      path: '/layout',
      name: 'layout',
      redirect: '/home',
      component: () => import('@/layout/index'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
          mate: {
            title: '首页'
          }
        },
        {
          path: '/actionManager',
          name: 'actionManager',
          component: () => import('@/views/actionManager/index'),
          mate: {
            title: '首页'
          }
        },
        {
          path: '/loanManager',
          name: 'loanManager',
          component: () => import('@/views/loanManager/index'),
          mate: {
            title: '首页'
          }
        }
      ]
    }
  ]
})
