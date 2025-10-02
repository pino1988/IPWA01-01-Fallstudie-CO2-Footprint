import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Imprint from "../components/Imprint.vue";
import Privacy from "../components/Privacy.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/imprint", component: Imprint },
    { path: "/privacy", component: Privacy },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
  scrollBehavior(to, _from, saved) {
    if (saved) return saved;
    if (to.hash) {
      return new Promise((resolve) => {
        requestAnimationFrame(() => {
          const el = document.querySelector(to.hash);
          if (el) {
            const y =
              (el as HTMLElement).getBoundingClientRect().top +
              window.scrollY -
              70;
            resolve({ top: y, behavior: "smooth" });
          } else {
            resolve({ el: to.hash, behavior: "smooth" });
          }
        });
      });
    }
    return { top: 0 };
  },
});
