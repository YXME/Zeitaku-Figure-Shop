import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Figure from '../views/Figure.vue'
import User from '../views/User.vue'
import Cart from '../views/Cart.vue'
import LoginRegister from '../views/LoginRegister.vue'
import Livraison from '../views/Livraison.vue'
import CGV from '../views/CGV.vue'
import About from '../views/About.vue'
import Catalogue from '../views/Catalogue.vue'
import Contact from'../views/Contact.vue'

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
    component: About
  },
  {
    path:'/figure/:url',
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
  },
  {
    path:'/catalogue',
    name:'Catalogue',
    component: Catalogue
  },
  {
    path:'/contact',
    name:'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
