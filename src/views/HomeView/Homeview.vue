<template>
  <div class="real-estates-wrapper">
    <div class="re-top">
      <div></div>
      <h2 class="re-top-title">Lista</h2>
      <RouterLink to="/form" class="add-button">Dodaj</RouterLink>
    </div>
    <div class="real-estates">
      
      <RealEstateBlock
        v-if="announcements.length > 0"
        v-for="announcement in announcements"
        :key="announcement.id"
        :announcment="announcement"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import RealEstateBlock from "./RealEstateBlock.vue";
import { useAnnouncementStore, type IAnnouncement } from "../HomeView/store";
import { onMounted, watch, ref } from "vue";

const store = useAnnouncementStore();
let announcements = ref<IAnnouncement[]>(store.announcements);
watch(() => store.announcements, (newVal) => {
  announcements.value = newVal;
});

</script>
<style>
.real-estates-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .re-top {
    display: flex;
    justify-content: space-between;
    > h2 {
      color: black;
    }
  }
}
.add-button {
  background-color: hsl(0, 0%, 80%);
  color: white;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  border-radius: 10px;
  text-align: center;
  font-size: 150%;
  margin: 4px 2px;
  cursor: pointer;
  text-decoration: none;
}
</style>
