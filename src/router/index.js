import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/boards',
    name: 'Home',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/boards/:id',
    name: 'boards',
    component: () => import('../views/BoardPage')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
