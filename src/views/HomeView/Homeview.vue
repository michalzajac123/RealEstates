<template>
  <div class="real-estate-wrapper">
    <div class="re-top">
      <div></div>
      <h2 class="re-top-title">Lista</h2>
      <AddButton />
    </div>
  </div>
</template>
<script setup lang="ts">
import AddButton from "./AddButton.vue";
</script>
<style>
.real-estate-wrapper {
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
</style>
