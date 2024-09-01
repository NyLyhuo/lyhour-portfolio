<script setup lang="ts">
import { ref } from "vue";

const projects = ref([
  {
    name: "Portfolio",
    icon: ["fab", "js"],
    description: "Create portfolio using Vue js and Tailwind css",
    link: "https://github.com/NyLyhuo/ecommerce-Website",
  },
  {
    name: "Ecommerce",
    icon: ["fab", "vuejs"],
    description: "Shopping website using Next js and tailwind css",
    link: "https://github.com/NyLyhuo/ecommerce-Website",
  },
  {
    name: "todo",
    icon: ["fab", "laravel"],
    description: "Todo website using Kotlin",
    link: "https://github.com/NyLyhuo/ecommerce-Website",
  },
  {
    name: "Portfolio",
    icon: ["fab", "js"],
    description: "Create portfolio using Vue js and Tailwind css",
    link: "https://github.com/NyLyhuo/ecommerce-Website",
  },
  {
    name: "Portfolio",
    icon: ["fab", "js"],
    description: "Create portfolio using Vue js and Tailwind css",
    link: "https://github.com/NyLyhuo/ecommerce-Website",
  },
  {
    name: "Portfolio",
    icon: ["fab", "js"],
    description: "Create portfolio using Vue js and Tailwind css",
    link: "https://github.com/NyLyhuo/ecommerce-Website",
  },
]);
</script>

<template>
  <div class="min-h-screen py-10 px-6 overflow-x-hidden">
    <div class="max-w-prose m-auto mb-8">
      <h1 class="text-black text-4xl font-extrabold mb-4 dark:text-white">Projects</h1>
      <p class="italic">Projects that I created and practiced</p>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2 max-w-500 w-max mx-auto slide-enter-content"
    >
      <a
        v-for="(project, index) in projects"
        :key="index"
        class="item relative flex items-center p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-500"
        :href="project.link"
        target="_blank"
        title=""
      >
        <div class="pt-2 pr-5">
          <font-awesome-icon :icon="project.icon" class="text-3xl opacity-50" />
        </div>
        <div class="flex-auto text-lg">
          <div>{{ project.name }}</div>
          <div class="text-sm opacity-50 font-normal">
            {{ project.description }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>