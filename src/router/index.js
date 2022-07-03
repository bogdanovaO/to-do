import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DetailPage from '../views/DetailPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/editing/:id',
    name: 'DetailPage',
    component: DetailPage
  },
  {
    path: '/create',
    name: 'CreatePage',
    component: DetailPage,
    type: 'create'
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
