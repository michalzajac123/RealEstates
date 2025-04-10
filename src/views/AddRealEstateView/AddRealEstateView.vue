<template>
   <div class="add-real-estate-wrapper">
      <h2 class="add-real-estate-title">Dodaj nieruchomość</h2>
      <FormView />
   </div>
</template>
<script setup lang="ts">
import FormView from "./FormView.vue"
</script>
<style scoped>
.add-real-estate-wrapper {
   display: flex;
   background-color: white;
   flex-direction: column;
   margin: 0 auto;
   height: 100vh;
   align-items: center;
   border-radius: 10px;
   padding: 10px;
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   .add-real-estate-title {
      color: black;
   }
}
</style>
