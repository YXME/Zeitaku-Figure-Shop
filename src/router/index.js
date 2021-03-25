import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Figure from '../views/Figure.vue'
import User from '../views/User.vue'
import Cart from '../views/Cart.vue'
import LoginRegister from '../views/LoginRegister.vue'
import Livraison from '../views/Livraison.vue'
import CGV from '../views/CGV.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
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
    path:'/figure',
    name:'Figure',
    component: Figure
  },
  {
    path:'/user',
    name:'User',
    component: User
  },
  {
    path:'/cart',
    name:'Cart',
    component: Cart
  },
  {
    path:'/login-register',
    name:'LoginRegister',
    component: LoginRegister
  },
  {
    path:'/livraisons',
    name:'Livraison',
    component: Livraison
  },
  {
    path:'/cgv',
    name:'CGV',
    component: CGV
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router