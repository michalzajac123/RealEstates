<template>
   <div class="wrapper">
      <HeaderView />
      <div class="wrapper-content">
         <router-view />
      </div>
   </div>
</template>
<script setup lang="ts">
import HeaderView from "./components/HeaderView.vue"
import { onMounted } from "vue"
import { useAnnouncementStore } from "./views/HomeView/store"

const store = useAnnouncementStore()

onMounted(async () => {
   try {
      await store.loadData()
   } catch {
      console.log("Nie udało się załadować danych")
   }
})
</script>
<style scoped>
.wrapper {
   display: flex;
   height: 100%;
   flex-direction: column;
   background-color: var(--background-color);
   align-items: center;
   .wrapper-content {
      width: 80%;
      margin: 10px;
   }
}
</style>
