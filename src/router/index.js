import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '/home',
      component: HomeView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/not-found.vue')
    },
    {
      path: '/vue-konva',
      name: 'vue-konva',
      component: () => import('../views/vue-konva.vue')
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import('../views/swiper.vue')
    },
    {
      path: '/swiper-vue',
      name: 'swiper-vue',
      component: () => import('../views/swiper-vue.vue')
    }
  ]
})

export default router
