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
      <input type="file" name="photos" id="photos" />

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
  </div>
</template>

<script lang="ts" setup>

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
