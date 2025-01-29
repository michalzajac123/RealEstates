<template>
   <Hero></Hero>
   <div class="re-top">
      <p class="re-top-title">LISTA OGŁOSZEŃ</p>
      <span class="line"></span>
   </div>
   <div class="real-estates">
      <template v-if="announcements.length > 0">
         <RealEstateBlock
            v-for="actuallAnnouncement in actuallAnnouncements"
            :key="actuallAnnouncement.id"
            :announcment="actuallAnnouncement"
         />
      </template>
   </div>
   <div class="pagination">
      <button class="pagination-buttons" :disabled="pageNumber === 1" @click="prevPage">Poprzednia</button>
      <button class="pagination-buttons" :disabled="announcements.length < 6" @click="nextPage">Następna</button>
   </div>
</template>
<script setup lang="ts">
import RealEstateBlock from "./RealEstateBlock.vue"
import Hero from "./Hero.vue"
import { useAnnouncementStore, type IAnnouncement } from "../HomeView/store"
import { onMounted, watch, ref } from "vue"

const store = useAnnouncementStore(),
   pageNumber = ref(store.pageNumber),
   currentPage = ref(1),
   announcements = ref<IAnnouncement[]>(store.announcements),
   actuallAnnouncements = ref<IAnnouncement[]>([])
onMounted(() => {
   updateAnnouncements()
})
watch(
   () => store.announcements,
   (newVal) => {
      announcements.value = newVal
      pageNumber.value = store.pageNumber
      updateAnnouncements()
   }
)
const nextPage = () => {
   currentPage.value++
   actuallAnnouncements.value = []
   updateAnnouncements()
}
const prevPage = () => {
   currentPage.value--
   actuallAnnouncements.value = []
   updateAnnouncements()
}
const updateAnnouncements = () => {
   if (currentPage.value < 1) {
      currentPage.value = 1
   }
   if (currentPage.value > pageNumber.value) {
      currentPage.value = pageNumber.value
   }
   for (let i = 0; i < announcements.value.length; i++) {
      if (i >= (currentPage.value - 1) * 6 && i < currentPage.value * 6) {
         actuallAnnouncements.value.push(announcements.value[i])
      }
   }
}
</script>
<style scoped>
.real-estates {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   gap: calc(var(--default-padding) * 2);
}
.re-top {
   display: flex;
   align-items: center;
   margin-bottom: var(--size-fluid-4);
   p {
      color: var(--orange-text-color);
      font-size: var(--font-size-1);
      font-weight: var(--font-weight-4);
      letter-spacing: 0.2px;
   }
   .line {
      height: 1px;
      background-color: var(--grey-background-color);
      text-align: center;
   }
}
.add-button {
   background-color: hsl(0, 0%, 80%);
   color: white;
   border: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   text-align: center;
   font-size: 150%;
   margin: 4px 2px;
   cursor: pointer;
   text-decoration: none;
}
.pagination {
   display: flex;
   justify-content: center;
}
.pagination-buttons {
   background-color: hsl(0, 0%, 80%);
   color: white;
   border: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   text-align: center;
   margin: 4px 2px;
   cursor: pointer;
   text-decoration: none;
}
.pagination-buttons:hover {
   background-color: hsl(0, 0%, 70%);
}
@media (max-width: 1350px) {
   .real-estates {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
   }
}
@media (max-width: 761px) {
   .real-estates {
      grid-template-columns: 100%;
      grid-template-rows: 1fr 1fr 1fr 1fr;
   }
}
</style>
