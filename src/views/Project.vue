<script setup lang="ts">
import { ref } from "vue";
import { codes as codesData } from "../data/codesData";
import { posters as postersData } from "../data/postersData";

const codes = ref(codesData);
const posters = ref(postersData);
</script>

<template>
  <div class="min-h-screen py-10 px-6 overflow-x-hidden">
    <div class="max-w-prose m-auto mb-8">
      <h1 class="text-black text-4xl font-extrabold mb-4 dark:text-white">
        Projects
      </h1>
      <p class="italic">Projects that I created and practiced</p>
    </div>
    <h1 class="text-black text-4xl font-extrabold italic mb-4 dark:text-white">
      Code
    </h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-2 max-w-screen-lg w-full mx-auto slide-enter-content"
    >
      <a
        v-for="(code, index) in codes"
        :key="index"
        :href="code.link"
        target="_blank"
        class="relative flex items-center w-full p-4 border border-dark-text rounded-lg shadow-sm hover:bg-gray-200 dark:hover:text-white dark:hover:bg-dark-background transform duration-500"
        :title="code.name"
      >
        <div class="pt-2 pr-5">
          <font-awesome-icon :icon="code.icon" class="text-3xl opacity-50" />
        </div>
        <div class="flex-auto text-lg">
          <div>{{ code.name }}</div>
          <div class="text-sm opacity-50 font-normal">
            {{ code.description }}
          </div>
        </div>
      </a>
    </div>
    <h1 class="text-black text-4xl font-extrabold italic mb-4 dark:text-white">
      Design
    </h1>
    <div
      class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 max-w-screen-lg mx-auto slide-enter-content"
    >
      <img
        v-for="(poster, index) in posters"
        :key="index"
        :src="poster.img"
        class="object-cover border border-dark-text rounded-lg shadow-sm overflow-hidden"
        alt=""
      />
    </div>
  </div>
</template>