import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CatalogView from '../views/CatalogView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView
    },

    {
      path: '/favourite',
      name: 'favourite',
      component: () => import('../views/FavouriteView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutBrend.vue')
    },
    {
      path: '/product/:itemId',
      name: 'product',
      path:'/catalog',
      name:'catalog',
      component: () => import('../views/CatalogView.vue')
    },
    {
      path: '/item',
      name: 'item',
      component: () => import('../views/CardOfGoods.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogIn.vue')
    },
  ]
})

export default router