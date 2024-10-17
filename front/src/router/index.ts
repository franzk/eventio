import { createRouter, createWebHistory } from 'vue-router'
import TmpHomeView from '@/views/TmpHomeView.vue'
import ProView from '@/views/ProView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TmpHomeView,
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: ProView,
    },
  ],
})

export default router
