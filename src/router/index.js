import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home')
  },
  {
    path: '/boards',
    name: 'boards-list',
    component: () => import('../views/BoardList')
  },
  {
    path: '/boards/:id',
    name: 'boards',
    component: () => import('../views/BoardPage')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!store.state.dashboard.boards.length && to.name === 'home') {
    next({ name: 'boards-list' })
  } else {
    next()
  }
})

export default router
