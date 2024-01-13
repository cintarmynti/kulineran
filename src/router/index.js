import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsView from '../views/FoodsView.vue'
import KeranjangView from '../views/KeranjangView.vue'
import FoodDetailView from '../views/FoodDetailView.vue'
import PesananSuksesView from '@/views/PesananSukses.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, 
  {
    path: '/foods',
    name: 'foods',
    component: FoodsView
  },
  {
    path: '/foods/:id',
    name: 'foodDetail',
    component: FoodDetailView
  },
  {
    path: '/pesanan-sukses',
    name: 'pesananSukses',
    component: PesananSuksesView
  },
  {
    path: '/keranjang',
    name: 'keranjang',
    component: KeranjangView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
