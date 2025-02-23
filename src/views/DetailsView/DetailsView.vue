<template>
   <div v-if="loading">Ładowanie...</div>
   <div class="details" v-else-if="store.announcement">
      <div class="details-photo" v-if="store.announcement.files?.length">
         <img
            :src="getImageUrl((store.announcement.files[0] as IFile).directus_files_id)"
            :alt="store.announcement.title"
            @click="visible = true"
         />
      </div>
      <div @click="router.push('/')" class="details-go-back">
         <div class="circle"><</div>
         <div>Wróć</div>
      </div>
      <div class="details-main">
         <div class="details-main-description">
            <div class="details-main-title">{{ store.announcement.title }}</div>
            <div class="details-main-posted-by">
               <span class="gray"> Wystawione przez </span> {{ store.announcement.email }}
            </div>
            <div class="line"></div>
            <div class="details-main-price">{{ store.announcement.price }} zł</div>
            <div class="details-main-description-text">{{ store.announcement.description }}</div>
         </div>
         <div class="details-main-contact-form">
            <div class="details-main-contact-form-title">
               <span class="orange">Zainteresowany?<br /></span>Skontaktuj się z ogłoszeniodawcą
            </div>
            <div class="details-main-contact-form-inputs">
               <p>Imie</p>
               <input type="text" placeholder="Jan Kowalski" /> <br />
               <p>Email</p>
               <input type="text" placeholder="janKowalski@gmail.com" /> <br />
               <p>Wiadomość</p>
               <textarea placeholder="Twoje pytanie"></textarea>
               <button>Wyślij</button>
            </div>
         </div>
      </div>
      <div class="details-gallery">
         <div class="details-gallery-title">
            <div class="orange">Galeria</div>
            <div class="line"></div>
         </div>
         <div class="details-gallery-photos">
            <img
               v-for="(file, index) in store.announcement.files"
               :key="index"
               class="details-gallery-photo"
               :src="getImageUrl((file as IFile).directus_files_id)"
               :alt="store.announcement.title"
               @click="visible = true"
            />
         </div>
      </div>
   </div>
   <VueEasyLightbox
      v-if="store.announcement && store.announcement.files?.length"
      :visible="visible"
      :imgs="store.announcement.files.map((file) => getImageUrl((file as IFile).directus_files_id))"
      @hide="visible = false"
   />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { IFile } from "../HomeView/store"
import { useAnnouncementStore } from "../HomeView/store"
import VueEasyLightbox from "vue-easy-lightbox"
const store = useAnnouncementStore(),
   router = useRouter(),
   route = useRoute(),
   loading = ref(true),
   DIRECTUS_BASE_URL = location.origin + "/directus",
   visible = ref(false)
const getImageUrl = (fileId: string) => `${DIRECTUS_BASE_URL}/assets/${fileId}`

onMounted(async () => {
   console.log(route.params)
   if (!route.params.id) {
      router.push("/")
   }
   loading.value = true
   await store.loadAnnouncement(Number(route.params.id))
   loading.value = false
})
</script>
<style>
.details {
   color: black;
   display: flex;
   flex-direction: column;
   border-radius: 10px;
   padding: 10px;
}
.details-photo {
   img {
      width: 100%;
      border-radius: 15px;
      height: 450px;
      object-fit: cover;
   }
}
.details-go-back {
   display: flex;
   align-items: center;
   padding: var(--default-padding) 0 var(--default-padding) 0;
   .circle {
      margin-right: var(--default-margin);
      border-radius: 50%;
      width: 30px;
      height: 30px;
      font-size: var(--font-size-4);
      border: 1px solid var(--orange-text-color);
      background-color: white;
      color: var(--orange-text-color);
      display: flex;
      justify-content: center;
      align-items: center;
   }
   div {
      font-size: var(--font-size-3);
      color: var(--orange-text-color);
   }
}
.details-go-back:hover {
   cursor: pointer;
}
.details-main {
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: var(--default-gap);
   width: 100%;
   .details-main-description {
      width: 90%;
      display: flex;
      flex-direction: column;
   }
   .details-main-contact-form {
      justify-self: end;
      width: 60%;
      display: flex;
      flex-direction: column;
      background-color: var(--light-gray-background-color);
      border-radius: var(--border-radius-25);

      text-align: center;
      .details-main-contact-form-title {
         font-size: var(--font-size-2);
         color: var(--text-color);
         font-weight: var(--font-weight-6);
         padding: var(--default-padding);
      }
      .details-main-contact-form-inputs {
         padding: var(--default-padding);
         display: flex;
         flex-direction: column;
         align-items: center;
         p {
            font-size: var(--font-size-2);
            color: var(--gray-text-color);
            text-align: left;
            width: 100%;
         }
         input {
            width: 100%;
            padding: var(--input-padding);
            border-radius: var(--border-radius-10);
            background-color: var(--grey-background-color);
         }
         textarea {
            width: 100%;
            padding: var(--input-padding);
            border-radius: var(--border-radius-10);
            background-color: var(--grey-background-color);
            border: 0;
            text-align: left;
         }
         button {
            width: 100%;
            padding: var(--default-padding);
            margin: var(--default-margin);
            border-radius: var(--border-radius-50);
            border: none;
            background-color: var(--black-background);
            color: var(--orange-text-color);
            font-size: var(--font-size-2);
            font-weight: var(--font-weight-6);
         }
      }
   }
}
.details-main-title {
   font-size: var(--font-size-6);
   color: var(--text-color);
   font-weight: var(--font-weight-6);
}
.details-main-posted-by {
   font-size: var(--font-size-2);
   font-weight: var(--font-weight-4);
   .gray {
      color: var(--gray-text-color);
   }
}
.line {
   width: 94%;
   height: 1px;
   background-color: var(--gray-text-color);
   margin: var(--default-margin) 0 var(--default-margin) 0;
}
.details-main-price {
   font-size: var(--font-size-5);
   color: var(--orange-text-color);
   font-weight: var(--font-weight-4);
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
.orange {
   color: var(--orange-text-color);
}
.details-gallery {
   width: 100%;
   display: flex;
   flex-direction: column;
   .details-gallery-title {
      display: flex;
      font-size: var(--font-size-2);
      color: var(--text-color);
      font-weight: var(--font-weight-6);
      margin-bottom: var(--default-margin);
      align-items: center;
      justify-content: space-between;
   }
   .details-gallery-photos {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(516px, 1fr));
      gap: var(--default-gap);
      .details-gallery-photo {
         width: 100%;
         border-radius: 15px;
         height: 300px;
         object-fit: cover;
      }
   }
}
@media (max-width: 942px) {
   .details-main {
      grid-template-columns: 1fr;
      .details-main-description {
         width: 100%;
         text-align: center;
      }
      .details-main-contact-form {
         justify-self: center;
         width: 100%;
         textarea {
            width: 100%;
            height: 100%;
         }
      }
   }
   .details-gallery {
      .details-gallery-photos {
         grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      }
   }

   .line {
      width: 100%;
   }
}
</style>
