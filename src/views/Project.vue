<script setup lang="ts">
import { ref } from "vue";

const projects = ref([
  {
    name: "Portfolio",
    icon: ["fab", "vuejs"],
    description: "Create portfolio using Vue js and Tailwind css",
    link: "https://github.com/NyLyhuo/lyhour-portfolio",
  },
  {
    name: "Ecommerce",
    icon: ["fab", "react"],
    description: "Shopping website using React js and tailwind css",
    link: "https://github.com/NyLyhuo/ecommerce-Website",
  },
  {
    name: "Menu ordering",
    icon: ["fab", "js"],
    description: "Provide a list of food that user can order and pay on online.",
    link: "https://github.com/NyLyhuo/Ordering",
  },
  {
    name: "Task Unity",
    icon: ["fab", "java"],
    description: "The management task app use Kotlin.",
    link: "https://github.com/Narazxc/TaskUnity",
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
        :href="project.link"
        target="_blank"
        class="relative flex items-center w-[400px] p-4 border border-dark-text rounded-lg shadow-sm hover:bg-gray-200 dark:hover:text-white dark:hover:bg-dark-background transform duration-500"
        :title="project.name"
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