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
        v-for="actuallAnnouncement in actuallAnnouncements"
        :key="actuallAnnouncement.id"
        :announcment="actuallAnnouncement"
      />
    </div>
    <div class="pagination">
      <button
        @click="prevPage"
        class="pagination-buttons"
        :disabled="pageNumber === 1"
      >
        Poprzednia
      </button>
      <button
        @click="nextPage"
        class="pagination-buttons"
        :disabled="announcements.length < 3"
      >
        Następna
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import RealEstateBlock from "./RealEstateBlock.vue";
import { useAnnouncementStore, type IAnnouncement } from "../HomeView/store";
import { onMounted, watch, ref } from "vue";

const store = useAnnouncementStore(),
  pageNumber = ref(store.pageNumber),
  currentPage = ref(1),
  announcements = ref<IAnnouncement[]>(store.announcements),
  actuallAnnouncements = ref<IAnnouncement[]>([]);
watch(
  () => store.announcements,
  (newVal) => {
    announcements.value = newVal;
    pageNumber.value = store.pageNumber;
    updateAnnouncements();
  }
);
const nextPage = () => {
  currentPage.value++;
  actuallAnnouncements.value = [];
  updateAnnouncements();
};
const prevPage = () => {
  currentPage.value--;
  actuallAnnouncements.value = [];
  updateAnnouncements();
};
const updateAnnouncements = () => {
  if (currentPage.value < 1) {
    currentPage.value = 1;
  }
  if (currentPage.value > pageNumber.value) {
    currentPage.value = pageNumber.value;
  }
  for (let i = 0; i < announcements.value.length; i++) {
    if (i >= (currentPage.value - 1) * 10 && i < currentPage.value * 10) {
      actuallAnnouncements.value.push(announcements.value[i]);
    }
  }
};
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
  width: 100px;
  border-radius: 10px;
  text-align: center;
  margin: 4px 2px;
  cursor: pointer;
  text-decoration: none;
}
.pagination-buttons:hover {
  background-color: hsl(0, 0%, 70%)
}
</style>
