import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Search from '../views/Search.vue'
import Catalog from '../views/Catalog.vue'
import AddItem from '../views/AddItem.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/AddItem',
    name: 'AddItem',
    component: AddItem
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
