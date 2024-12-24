<template>
  <div class="form-wrapper">
    <form class="add-form">
      <input
        type="number"
        id="price"
        v-model="store.addAnnouncemnt.price"
        name="price"
        placeholder="Cena"
      />
      <input
        type="text"
        id="numberOfPlot"
        name="numberOfPlot"
        placeholder="Numer Działki"
      />
      <textarea
        type="text"
        v-model="store.addAnnouncemnt.description"
        id="description"
        name="description"
        placeholder="Opis"
      />
      <input
        type="phone"
        name="phoneNumber"
        v-model="store.addAnnouncemnt.phone"
        id="phoneNumber"
        placeholder="Number telefonu"
      />
      <input
        type="text"
        v-model="store.addAnnouncemnt.email"
        name="email"
        id="email"
        placeholder="Adres email"
      />
      <div
        class="drop-zone"
        @dragover.prevent="onDragOver"
        @dragleave="onDragLeave"
        @drop.prevent="handleDrop"
        :class="{ 'is-dragging': isDragging }"
      >
        Przeciągnij i upuśc zdjęcia tutaj lub kliknij, aby wybrać
        <input
          @change="handleFileChange"
          multiple
          type="file"
          name="photos"
          id="photos"
          ref="fileInput"
        />
        <div class="image-previews">
          <div
            v-for="(image, index) in compressedImages"
            class="image"
            :key="index"
          >
            <img :src="image" alt="Podgląd" />
            <p class="remove-file" @click="() => removeFile(index)">&#215;</p>
          </div>
        </div>
      </div>
      <div class="sewage">
        <label for="sewage">Kanalizacja</label>
        <input type="checkbox" name="sewage" id="sewage" />
      </div>
      <div class="water">
        <label for="water">Wodociąg</label>
        <input type="checkbox" name="water" id="water" />
      </div>
      <div class="access-to-road">
        <label for="access-to-road">Dostęp do drogi</label>
        <input type="checkbox" name="access-to-road" id="access-to-road" />
      </div>
      <button type="submit" @click="validateForm">Dodaj</button>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import imageCompression from "browser-image-compression";
import { useAnnouncementStore } from "../HomeView/store";

const fileInput = ref<HTMLInputElement | null>(null),
  compressedImages = ref<string[]>([]),
  isDragging = ref(false),
  store = useAnnouncementStore();

const handleFileChange = async (event: Event) => {
  const input = event.target as HTMLInputElement;
  const files = input.files;

  if (files && files.length > 0) {
    processFiles(files);
  }
};
const handleDrop = (event: DragEvent) => {
  const files = event.dataTransfer?.files;
  if (files && files.length > 0) {
    isDragging.value = false;
    processFiles(files);
  }
};
const onDragOver = () => {
  isDragging.value = true;
};
const onDragLeave = () => {
  isDragging.value = false;
};
const removeFile = (index: number) => {
  compressedImages.value.splice(index, 1);
  // No need to update fileInput.value as it does not support splice method
  //automatyczne aktualizowanie input file
};
const processFiles = async (files: FileList) => {
  for (const file of files) {
    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 500,
        quality: 0.2,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(file, options);
      console.log(compressedFile);
      const compresseImageUrl = URL.createObjectURL(compressedFile);
      compressedImages.value.push(compresseImageUrl);
      
      store.addAnnouncemnt.files.push(compressedFile);
    } catch (error) {
      console.error(error);
    }
  }
};
const validateForm = (e) => {
  e.preventDefault();
  if (
    store.addAnnouncemnt.price &&
    store.addAnnouncemnt.description &&
    store.addAnnouncemnt.email
  ) {
    store.addAnnouncemntToDirectus();
  } else {
    alert("error");
  }
};
</script>
<style>
.form-wrapper {
  display: flex;
  color: black;
  font-size: 20px;
  justify-content: center;
  width: 80%;
}
.add-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.add-form > input,
textarea {
  margin: 20px;
  height: 40px;
  background-color: white;
  border-radius: 10px;
  border: 3px solid gray;
  text-align: center;
  font-size: 20px;
  width: 100%;
  color: black;
}
.drop-zone {
  border: 2px dashed gray;
  padding: 20px;
  text-align: center;
  margin: 20px 0;
  cursor: pointer;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
}
.drop-zone.is-dragging {
  background-color: #e0f7fa;
  border-color: #00796b;
}
.hidden-input {
  display: none;
}
.image-previews {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
}
.image-previews img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid gray;
  position: relative;
}
.image {
  position: relative;
}
.remove-file {
  position: absolute;
  top: 0;
  right: 0;
  color: black;
  border-radius: 50%;
  width: 20px;
  padding: 0;
  margin: 0;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;
}
.remove-file:hover {
  background-color: rgba(255, 0, 0, 0.5);
  transition: 0.2s;
}
.sewage,
.water,
.access-to-road {
  align-self: flex-start;
}
</style>
