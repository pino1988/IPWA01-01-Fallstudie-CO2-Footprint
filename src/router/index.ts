import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Imprint from '../components/Imprint.vue'
import Privacy from '../components/Privacy.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/imprint', component: Imprint },
    { path: '/privacy', component: Privacy },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior() { return { top: 0 } }
})
