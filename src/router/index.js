import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  // scroll top smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

  next()
})

export default router
