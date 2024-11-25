<template>
  <div class="form-wrapper">
    <form class="add-form">
      <input type="number" id="price" name="price" placeholder="Cena" />
      <input
        type="text"
        id="numberOfPlot"
        name="numberOfPlot"
        placeholder="Numer Działki"
      />
      <textarea
        type="text"
        id="description"
        name="description"
        placeholder="Opis"
      />
      <input
        type="phone"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="Number telefonu"
      />
      <input type="text" name="email" id="email" placeholder="Adres email" />
      Dodaj Zdjęcia
      <input @change="handleFileChange" type="file" name="photos" id="photos" ref="fileInput" />

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
      <button type="submit">Dodaj</button>
    </form>
    <div v-if="compressedImage">
      <img :src="compressedImage" alt="Skompresowany obraz">
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import imageCompression from 'browser-image-compression';
const fileInput = ref<HTMLInputElement | null>(null);
const compressedImage = ref<string | null>(null);
const handleFileChange = async(event:Event) =>{
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];

  if(file){
    try{
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 500,
        quality:0.2,
        useWebWorker: true
      }
      const compressedFile = await imageCompression(file, options);
      const compressedImageUrl = URL.createObjectURL(compressedFile);
      compressedImage.value = compressedImageUrl;
      if(fileInput.value){
        fileInput.value.value = compressedImageUrl;
        
      }
      
    }catch(error){
      console.error(error); 
    }
  }
}

</script>
<style>
.form-wrapper {
  display: flex;
  color: black;
  font-size: 20px;
  justify-content: center;
  width: 80%;
  .add-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    > input,
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
  }
}
.sewage,
.water,
.access-to-road {
  align-self: flex-start;
}
</style>
