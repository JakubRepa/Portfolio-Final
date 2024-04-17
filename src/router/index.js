import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `Jakub Repa | Multimedia Designer | ${to.meta.title}`
  next()
})

export default router
