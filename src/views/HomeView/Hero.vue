<template>
   <div class="hero">
      <div class="hero-text-wrapper">
         <div class="hero-text-top">
            <p><span class="grey">Witaj, </span> na Stronie z <span class="grey">nieruchomościami</span> w Gnojniku</p>
         </div>
         <div class="hero-text-bottom">
            <p>
               Znajdziesz tu <span class="grey">działki i nie</span> tylko Lorem ipsum dolor sit amet consectetur
               adipisicing elit.
            </p>
         </div>
      </div>
      <div class="hero-icons">
         <div class="hero-icon"></div>
         <div class="hero-icon"></div>
         <div class="hero-icon"></div>
      </div>
   </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.hero {
   display: flex;
   justify-content: center;
   margin-bottom: var(--size-fluid-4);
}
.hero-text-wrapper {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: start;
   padding: var(--size-fluid-3) var(--size-fluid-2);
}
.grey {
   color: var(--gray-text-color);
}
p {
   font-size: var(--size-fluid-4);
   color: var(--text-color);
   text-shadow: var(--shadow-3);
   text-align: justify;
}
</style>
