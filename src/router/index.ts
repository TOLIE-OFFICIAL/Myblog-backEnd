import { createRouter, createWebHistory } from 'vue-router'
import mainView from '../views/mainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: mainView,
      children: [
        {
          path: '/editor',
          name: 'editor',
          component: () => import("@/components/Editor/index.vue"),
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   component: () => import('../views/Admin.vue')
    // }
  ]
})

export default router
