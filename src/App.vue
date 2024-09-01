<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div
    class="bg-white text-gray-700 dark:bg-dark-background dark:text-dark-text min-h-screen"
  >
  <header>
    <Navbar />
  </header>
    <RouterView />
  </div>
</template>
  
<style>
html {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
