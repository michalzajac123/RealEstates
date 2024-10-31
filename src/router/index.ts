// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView/Homeview.vue";
import AddRealEstateView from "../views/AddRealEstateView/AddRealEstateView.vue";

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
  {
    path: "/form",
    name: "form",
    component: AddRealEstateView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
