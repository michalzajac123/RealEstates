<template>
   <header class="header">
      <div class="header-search">
         <button class="search-button">
            <span class="icon"></span>
            <span>Wyszukaj Ogłoszenie</span>
         </button>
      </div>
      <div class="header-title">
         <p class="h-title-text">NIERUCHOMOŚCI</p>
         <p class="h-title-text orange">GNOJNIK</p>
      </div>
      <div class="header-links">
         <div class="ham-menu" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
         </div>
         <div class="submenu" :class="{ 'submenu-active': isMenuOpen }">
            <div class="submenu-title">NAWIGACJA</div>
            <div><RouterLink class="router" to="/">Strona Główna</RouterLink></div>
            <div><RouterLink class="router" to="/form">Dodaj Ogłoszenie</RouterLink></div>
            <div><RouterLink class="router" to="/statut">Regulamin</RouterLink></div>
            <div><RouterLink class="router" to="/aboutus">O Nas</RouterLink></div>
            <span class="line"></span>
            <div class="submenu-title">KONTAKT</div>
            <div class="phone-number">Telefon: 123 456 789</div>
         </div>
      </div>
   </header>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { onMounted } from "vue"
onMounted(() => {
   const hamMenu = document.querySelector(".ham-menu")
   hamMenu?.addEventListener("click", () => {
      hamMenu?.classList.toggle("active")
   })
})
const isMenuOpen = ref(false)

const toggleMenu = () => {
   isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
/* Header */
.header {
   color: rgb(90, 90, 90);
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   align-items: center;
   padding: var(--size-fluid-3) 0;
   text-align: center;
}
/* Header Title */
.header-title {
   margin: 0;
   display: flex;
   justify-content: center;
}
.h-title-text {
   font-size: var(--font-size-2);
   margin: 0.3rem;
   color: var(--text-color);
   font-weight: var(--font-weight-8);
}
.orange {
   background-color: var(--orange-background-color);
}
/* Search */
.search-button {
   display: flex;
   justify-content: center;
   align-items: center;
   gap: var(--default-gap);
   padding: var(--default-padding);
   border: 1px solid #ccc;
   border-radius: var(--border-radius-100);
   background-color: white;
   font-size: var(--font-size-2);
   color: #555;
   cursor: pointer;
}
.search-button:hover {
   border-color: #888;
}
.search-button .icon {
   position: relative;
   width: 15px;
   height: 15px;
   border: 2px solid var(--orange-background-color);
   border-radius: 50%;
}
.search-button .icon::after {
   content: "";
   position: absolute;
   width: 11px;
   height: 1.9px;
   background-color: var(--orange-background-color);
   top: 50%;
   left: 100%;
   transform: translate(0%, 290%) rotate(45deg);
   transform-origin: left top;
}
.router {
   margin: 0 10px;
   text-decoration: none;
   font-size: var(--font-size-2);
   color: var(--text-color);
}
.router:hover {
   text-decoration: underline;
}
/* Header Links */
.header-links {
   padding: var(--padding-1);
   display: flex;
   position: relative;
}
.ham-menu {
   height: 2.5rem;
   width: 2.5rem;
   margin-left: auto;
   position: relative;
   cursor: pointer;
}
.ham-menu span {
   height: 5px;
   background-color: var(--orange-background-color);
   border-radius: 25px;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   transition: 0.3s ease;
   width: 100%;
}
.ham-menu span:nth-child(1) {
   top: 25%;
}
.ham-menu span:nth-child(3) {
   top: 75%;
}
.ham-menu.active span:nth-child(1) {
   top: 50%;
   transform: translate(-50%, -50%) rotate(45deg);
}
.ham-menu.active span:nth-child(2) {
   opacity: 0;
}
.ham-menu.active span:nth-child(3) {
   top: 50%;
   transform: translate(-50%, -50%) rotate(-45deg);
}
ul {
   list-style-type: none;
}
.submenu {
   opacity: 0;
   visibility: hidden;
   position: absolute;
   right: 0%;
   top: 100%;
   background-color: white;
   border-radius: 1rem;
   padding: var(--padding-2);
   display: flex;
   flex-direction: column;
   align-items: start;
   box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
   transition: all 0.3s ease;
   z-index: 10;
   .line {
      height: 1px;
      background-color: var(--orange-background-color);
   }
   .submenu-title {
      color: var(--orange-text-color);
   }
   > div {
      font-size: var(--font-size-2);
   }
}
.submenu-active {
   opacity: 1;
   visibility: visible;
   transform: translateY(0);
}
.submenu div {
   color: var(--text-color);
   padding: var(--default-padding) 0;
   border-radius: 0.5rem;
   transition: background 0.2s ease;
   white-space: nowrap;
}
.submenu li:hover {
   color: white !important;
}
.phone-number {
   margin: 0;
}
@media (max-width: 1440px) {
   .header {
      grid-template-columns: 1fr 1fr;
      height: 8rem;
   }
   .header-title {
      display: none;
   }
}
@media (max-width: 770px) {
   .header {
      height: 6rem;
   }
   .search-button {
      display: none;
   }
}
</style>
