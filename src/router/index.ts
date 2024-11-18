// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView/Homeview.vue";
import AddRealEstateView from "../views/AddRealEstateView/AddRealEstateView.vue";
import DetailsView from "../views/DetailsView/DetailsView.vue";
// Definiowanie tras
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/form",
    name: "form",
    component: AddRealEstateView,
  },
  {
    path: "/details",
    name: "details",
    component: DetailsView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
