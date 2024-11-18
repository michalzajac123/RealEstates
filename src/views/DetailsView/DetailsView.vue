<template>
  <div class="details">
    <div class="details-photo">
      <img
        src="https://profesjonalista.net/wp-content/uploads/2019/08/z25104261IHCo-to-jest-mieszkanie-rozkladowe-.jpg"
        alt=" zdjecie"
      />
    </div>
    <div v-if="announcement.title" class="details-title">
      <h1>{{ announcement.title }}</h1>
    </div>
    <div class="details-price">
      <h2>{{ announcement.price }} zł</h2>
    </div>
    <div class="details-address">
      <p>{{ announcement.place.name }}</p>
    </div>
    <div class="details-description">
      <p>{{ announcement.description }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { type IAnnouncement } from "../HomeView/store";
import { useAnnouncementStore } from "../HomeView/store";
const store = useAnnouncementStore();
const announcement = ref<IAnnouncement>(store.data);
</script>
<style>
.details {
  display: flex;
  background-color: white;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  height: 100vh;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.details-photo {
  width: 100%;
  img {
    border-radius: 15px;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
}
.details-title {
  h1 {
    font-size: 30px;
    color: black;
  }
}
.details-price {
  h2 {
    font-size: 25px;
    color: black;
  }
}
.details-description {
  p {
    font-size: 20px;
    color: black;
  }
}
.details-address {
  p {
    font-size: 20px;
    color: black;
  }
}
</style>
