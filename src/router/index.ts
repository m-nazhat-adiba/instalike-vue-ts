import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/TImeline/index.vue")
    },
    {
      path: '/search',
      name: 'search',
      component: () => import("../views/Search/index.vue")
    }
   
  ]
})

export default router
