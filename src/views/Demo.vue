<script setup lang="ts">
import { onMounted, ref } from "vue";
import { demos as demosData } from "../data/demosData";

const demos = ref(demosData);

function removeControls(event: Event) {
  const video = event.target as HTMLVideoElement;
  video.removeAttribute("controls");
}
onMounted(() => {
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    video.removeAttribute("controls");
  });
});
</script>

<template>
  <div class="px-7 py-10 overflow-x-hidden">
    <div class="max-w-prose m-auto mb-8">
      <h1 class="text-black text-4xl font-extrabold mb-4 dark:text-secondary">Demos</h1>
      <p class="italic">Demonstrations for projects</p>
    </div>
    <article>
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 slide-enter-content">
        <div
          v-for="(demo, index) in demos"
          :key="index"
          class="demo-card break-inside-avoid-column border-1 border-primary rounded-lg shadow-sm hover:scale-101 hover:shadow-lg transform duration-500 overflow-hidden"
        >
          <a :href="demo.link" target="_blank">
            <video
              :src="demo.video"
              controls
              autoplay
              loop
              playsinline
              muted
              class="w-full h-auto border-b-2 border-primary border-opacity-50"
              @mouseenter="removeControls($event)"
            ></video>
            <div class="p-4">
              <p class="font-bold mb-4">{{ demo.title }}</p>
              <p class="text-sm text-gray-500">{{ demo.description }}</p>
              <div class="text-sm text-gray-400 pt-2">{{ demo.date }}</div>
            </div>
          </a>
        </div>
      </div>
    </article>
  </div>
</template>