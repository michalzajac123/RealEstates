<template>
  <header class="header">
    <div><h1 class="header-title">Nieruchomości Gnojnik</h1></div>
    <div class="routers">
      <RouterLink class="router" to="/">Strona Główna</RouterLink>
      <RouterLink class="router" to="/form">Dodaj Ogłoszenie</RouterLink>
      <RouterLink class="router" to="statut">Regulamin</RouterLink>
      <RouterLink class="router" to="aboutus">O Nas</RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<style scoped>
.header {
  background-color: white;
  color: rgb(90, 90, 90);
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text-align: center;
  .header-title {
    margin: 0;
  }
}
.router {
  margin: 0 10px;
  text-decoration: none;
  color: rgb(0, 89, 255);
  font-size: 20px;
  font-weight: bold;
  r {
    color: rgb(90, 90, 90);
  }
}
</style>
