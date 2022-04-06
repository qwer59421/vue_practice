import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SearchApi from '../views/SearchApi.vue'
import ClickApi from '../views/ClickApi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/searchapi',
    name: 'SearchApi',
    component: SearchApi,
  },
  {
    path: '/clickapi',
    name: 'ClickApi',
    component: ClickApi,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
