// src/router/index.ts
import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "../views/HomeView/Homeview.vue"
import AddRealEstateView from "../views/AddRealEstateView/AddRealEstateView.vue"
import DetailsView from "../views/DetailsView/DetailsView.vue"
import StatutView from "../views/StatutView/StatutView.vue"
import AboutUsView from "../views/AboutUsView/AboutUsView.vue"
// Definiowanie tras
const routes = [
   {
      path: "/",
      name: "Home",
      component: HomeView
   },
   {
      path: "/form",
      name: "form",
      component: AddRealEstateView
   },
   {
      path: "/details:id?",
      name: "details",
      component: DetailsView,
      props: true
   },
   {
      path: "/statut",
      name: "statut",
      component: StatutView
   },
   {
      path: "/aboutus",
      name: "aboutus",
      component: AboutUsView
   }
]

const router = createRouter({

   history: createWebHashHistory(import.meta.env.BASE_URL),
   routes
})

export default router
