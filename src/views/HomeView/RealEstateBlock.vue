<template>
  <div class="real-estate-block">
    <div class="re-img">
      <img
        src="https://profesjonalista.net/wp-content/uploads/2019/08/z25104261IHCo-to-jest-mieszkanie-rozkladowe-.jpg"
        alt="Real Estate"
      />
    </div>
    <div class="re-description">
      <h4 class="price">7000 zł</h4>
      <p class="address">Gnojnik 233</p>
      <p class="description">2 mieszkania</p>
      <button class="show-details" >Szczegóły</button>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
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
  justify-content: space-between;
  padding: 10px;
  > * {
    color: black;
  }
}
</style>
