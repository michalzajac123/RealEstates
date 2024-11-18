<template>
  <div class="wrapper">
    <HeaderView />
    <div class="wrapper-content">
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts">
import HeaderView from "./components/HeaderView.vue";
import { onMounted, ref } from "vue";
import { useAnnouncementStore } from "./views/HomeView/store";
const store = useAnnouncementStore();

onMounted(async () => {
  try {
    await store.loadData();
  } catch (err) {
    console.log("Nie udało się załadować danych");
  }
});
</script>
<style scoped>
.wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: #f0f0f0;
  align-items: center;
  .wrapper-content {
    width: 80%;
    margin: 10px;
  }
}
</style>
