import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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

export default router
