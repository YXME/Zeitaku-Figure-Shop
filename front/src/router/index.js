import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Figure from '../views/Figure.vue'
import User from '../views/User.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Livraison from '../views/Livraison.vue'
import CGV from '../views/CGV.vue'
import About from '../views/About.vue'
import Catalogue from '../views/Catalogue.vue'
import Contact from'../views/Contact.vue'
import Payment from'../views/Payment.vue'
import Order from'../views/Order.vue'
import Admin from'../views/Admin.vue'
import NotFound from'../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      guest: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      guest: true
    }
  },
  {
    path:'/figure/:url',
    name:'Figure',
    component: Figure,
    meta: {
      guest: true
    }
  },
  {
    path:'/user',
    name:'User',
    component: User,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:'/cart',
    name:'Cart',
    component: Cart,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:'/login',
    name:'Login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path:'/register',
    name:'Register',
    component: Register,
    meta: {
      guest: true
    }
  },
  {
    path:'/livraisons',
    name:'Livraison',
    component: Livraison,
    meta: {
      guest: true
    }
  },
  {
    path:'/cgv',
    name:'CGV',
    component: CGV,
    meta: {
      guest: true
    }
  },
  {
    path:'/catalogue',
    name:'Catalogue',
    component: Catalogue,
    meta: {
      guest: true
    }
  },
  {
    path:'/contact',
    name:'Contact',
    component: Contact,
    meta: {
      guest: true
    }
  },
  {
    path:'/payment',
    name:'Payment',
    component: Payment,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:'/order/:orderid',
    name:'Order',
    component: Order,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
        requiresAuth: true,
        clearance : true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
    meta: {
      guest: true
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) 
  {
    if (localStorage.getItem('jwt') == null) 
    {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } 
    else 
    {
      let user = JSON.parse(localStorage.getItem('user'))
      if(to.matched.some(record => record.meta.clearance)) 
      {
        if(user.clearance == 1)
        {
          next()
        }
        else
        {
          next({ name: 'User'})
        }
      }
      else 
      {
          next()
      }
    }
  } 
  else 
  {
    next()
  }
})

export default router
