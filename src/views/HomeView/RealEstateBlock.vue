<template>
  <div class="real-estate-block">
    <div class="re-img">
      <img :src="getImageUrl(files[0].directus_files_id)" alt="Real Estate" />
    </div>
    <div class="re-description">
      <h4 class="title">{{ announcment.title }}</h4>
      <p class="price">{{ announcment.price }} zł</p>
      <p class="address">{{ announcment.place.name }}</p>
      <RouterLink
        :to="{ name: 'details' }"
        @click="changeRoute(announcment.id)"
        class="show-details"
        >Szczegóły</RouterLink
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { type IAnnouncement, useAnnouncementStore } from "./store";
import { computed } from "vue";

const DIRECTUS_BASE_URL = location.origin + "/directus",
  files = computed(() => props.announcment?.files || []),
  props = defineProps<{
    announcment: IAnnouncement;
  }>(),
  store = useAnnouncementStore();

const getImageUrl = (fileId: string) => `${DIRECTUS_BASE_URL}/assets/${fileId}`;
console.log(props.announcment.files);
console.log(props.announcment.files[0].directus_files_id);
const changeRoute = (id) => {
  store.announcementId = id; // store.announcementId is a ref in store when we click on the link we change the value of this ref
};
</script>
<style scoped>
.real-estate-block {
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  background-color: white;
  border-radius: 10px;
}
.re-img {
  width: 50%;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.re-description {
  display: flex;
  flex-direction: column;
  padding: 10px;
  > * {
    color: black;
  }
  .title {
    font-size: 25px;
    margin: 0;
    font-weight: bold;
  }
  .price {
    font-size: 22px;
    font-weight: bold;
  }
  .address {
    font-size: 20px;
    font-weight: 500;
  }
  .show-details {
    width: 100px;
    height: 30px;
    background-color: #dcdcdc;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
  }
}
@media (max-width: 764px) {
  .real-estate-block {
    flex-direction: column;
  }
  .re-description {
    width: 100%;
  }
  .re-img {
    width: 100%;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .show-details {
    width: 100%;
  }
}
</style>
