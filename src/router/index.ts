// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Homeview.vue";

// Definiowanie tras
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    // Lazy loading dla komponentu
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
