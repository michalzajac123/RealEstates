<template>
   <div class="real-estate-block">
      <div class="real-estate-block-img">
         <RouterLink :to="{ name: 'details', params: { id: announcment.id } }" class="show-details"
            ><img :src="getImageUrl((files[0] as IFile)?.directus_files_id)" alt="Real Estate"
         /></RouterLink>
         <p class="price">{{ announcment.price }} zł</p>
      </div>
      <div class="re-description">
         <p class="address">{{ announcment.place.name }}</p>
         <p class="description">{{ announcment.description }}</p>
      </div>
   </div>
</template>
<script lang="ts" setup>
import { type IAnnouncement } from "./store"
import { computed } from "vue"
import type { IFile } from "./store"
const DIRECTUS_BASE_URL = location.origin + "/directus",
   files = computed(() => props.announcment?.files || []),
   props = defineProps<{
      announcment: IAnnouncement
   }>()
const getImageUrl = (fileId: string) => `${DIRECTUS_BASE_URL}/assets/${fileId}`
</script>
<style scoped>
.real-estate-block {
   display: flex;
   flex-direction: column;
   place-self: center;
   position: relative;
}
p.price {
   font-size: var(--font-size-4);
   padding: var(--default-padding);
   color: var(--white-text-color) !important;
   position: absolute !important;
   top: 0;
   left: 5%;
}
.real-estate-block-img {
   .show-details {
      display: block;
      img {
         display: block;
         object-fit: cover;
         filter: brightness(0.7);
         border-radius: 20px;
         height: 256px;
         aspect-ratio: 2 / 1;
      }
   }
}

.re-description {
   padding: calc(var(--default-padding) / 3) var(--default-padding);

   .address {
      color: var(--orange-text-color);
      font-size: var(--font-size-3);
      font-weight: var(--font-weight-5);
   }
   .description {
      color: var(--gray-text-color);
      font-weight: var(--font-weight-4);
   }
}
@media (max-width: 770px) {
   p.price {
      font-size: var(--font-size-3);
   }
   .re-description {
      .address {
         font-size: var(--font-size-2);
      }
      .description {
         font-size: var(--font-size-1);
      }
   }
   .show-details {
      img {
         height: 156px;
      }
   }
}
</style>
