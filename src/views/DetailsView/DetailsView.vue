<template>
   <div class="details">
      <div class="details-photo">
         <img
            :src="getImageUrl((announcement.files[0] as IFile).directus_files_id)"
            :alt="announcement.title"
            @click="visible = true"
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
   <VueEasyLightbox
      :visible="visible"
      :imgs="announcement.files.map((file) => getImageUrl(file.directus_files_id))"
      @hide="visible = false"
   />
</template>
<script setup lang="ts">
import { ref } from "vue"
import { IFile, type IAnnouncement } from "../HomeView/store"
import { useAnnouncementStore } from "../HomeView/store"
import VueEasyLightbox from "vue-easy-lightbox"
const store = useAnnouncementStore(),
   announcement = ref<IAnnouncement>(store.data || ({} as IAnnouncement)),
   DIRECTUS_BASE_URL = location.origin + "/directus",
   visible = ref(false)
const getImageUrl = (fileId: string) => `${DIRECTUS_BASE_URL}/assets/${fileId}`
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
