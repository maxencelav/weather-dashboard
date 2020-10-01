import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Details from '../views/Details.vue'
import Error from '../views/Error.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About

  },
  {
    path: '/details/:city',
    name: 'Details',
    component: Details

  },
  {
    path: '*',
    name: 'Error',
    component: Error

  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active', // active class for *exact* links.
  routes
})

export default router
