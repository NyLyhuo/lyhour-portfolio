<script setup lang="ts">
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ref, onMounted } from "vue";

const isDarkMode = ref(false);
const burstVisible = ref(false);

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
  localStorage.setItem("darkMode", JSON.stringify(isDarkMode.value));
}

onMounted(() => {
  const savedPreference = localStorage.getItem("darkMode");
  if (savedPreference) {
    isDarkMode.value = JSON.parse(savedPreference);
    document.documentElement.classList.toggle("dark", isDarkMode.value);
  }
});
</script>

<template>
  <nav class="p-8">
    <ul class="font-bold flex items-center space-x-6 m-0 p-0">
      <li class="mr-auto hover:text-primary dark:hover:text-white">
        <router-link to="/">
          <svg
            class="w-8 h-8 fill-current logo"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 327.66 377.5"
          >
            <polygon
              points="122.93 231.89 104.37 271.71 66.36 353.22 21.85 369.51 0 377.5 6.97 362.57 6.86 362.52 67.76 231.89 122.93 231.89"
            />
            <polygon
              points="176.06 .07 98.3 166.82 74.99 216.82 74.8 216.82 98.11 166.82 175.9 0 176.06 .07"
            />
            <polygon
              points="98.3 166.82 74.99 216.82 74.8 216.82 98.11 166.82 98.3 166.82"
            />
            <polygon
              points="327.66 216.82 261.99 216.82 225.54 294.98 159 319.32 206.81 216.82 74.99 216.82 98.3 166.82 176.06 .07 176.09 0 231.25 0 153.48 166.82 304.34 166.82 327.66 216.82"
            />
            <polygon
              points="104.49 271.77 66.54 353.16 66.36 353.22 104.37 271.71 104.49 271.77"
            />
          </svg>
        </router-link>
      </li>
      <li class="hover:text-primary dark:hover:text-white">
        <router-link to="/">Home</router-link>
      </li>
      <li class="hover:text-primary dark:hover:text-white">
        <router-link to="/project">Project</router-link>
      </li>
      <li class="hover:text-primary dark:hover:text-white">
        <router-link to="/demo">Demo</router-link>
      </li>
      <li class="hover:text-primary dark:hover:text-white">
        <a
          href="https://github.com/NyLyhuo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </li>
      <li class="hover:text-primary dark:hover:text-white">
        <a
          href="https://t.me/bonglyhour"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'telegram']" />
        </a>
      </li>
      <li class="relative hover:text-primary dark:hover:text-white">
        <button @click="toggleDarkMode" class="relative">
          <font-awesome-icon :icon="isDarkMode ? faSun : faMoon"/>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

nav {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>