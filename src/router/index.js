import { createRouter, createWebHistory } from 'vue-router'
import App from '../views/App.vue'
import LandingPage from '../views/LandingPage.vue'

const routes = [
  {
    path: '/',
    name: 'landing-page',
    component: LandingPage
  },
  {
    path: '/app',
    name: 'app',
    component: App
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
