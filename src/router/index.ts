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
  scrollBehavior(to, _from, saved) { //todo - das funktioniert nicht so wie ich mir das vorstelle -> siehe auch Header.vue. Wenn auf Hauptpage und dann DATA angeklickt wird der LInk komisch und scrollt nicht nach unten. Wenn auf Privacy und dann DATA dann geht er auf Hauptrouter sondst aber ncihts.
    if (saved) return saved
    if (to.hash) {
      return new Promise(resolve => {
        requestAnimationFrame(() => {
          resolve({ el: to.hash, behavior: 'smooth' })
        })
      })
    }
    return { top: 0 }
  }
})