<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import { SpeedInsights } from '@vercel/speed-insights/vue'
</script>

<template>
  <Navbar />
  <main class="px-7 py-10">
    <RouterView />
    <SpeedInsights />
  </main>
</template>

<style>
html {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
