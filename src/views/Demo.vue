
<script setup lang="ts">
import { ref } from "vue";

function removeControls(event: Event) {
  const video = event.target as HTMLVideoElement;
  video.removeAttribute("controls");
}

const demos = ref([
  {
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://github.com/Narazxc/TaskUnity",
    video: "/videos/vdo.mp4",
    date: "Mar 05 2024",
  },
  {
    title: "Project 2",
    description:
      "Donec sagittis mauris id libero bibendum, vel tristique neque vulputate.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/project2",
    video: "https://www.youtube.com/embed/xuP4g7IDgDM?si=l8269Zo1Sz9_UWmB",
    date: "Mar 05 2024",
  },
  {
    title: "Project 3",
    description:
      "Nulla facilisi. Sed vel ipsum vel sapien consectetur molestie.",
    link: "/project3",
    video: "https://www.youtube.com/embed/xuP4g7IDgDM?si=l8269Zo1Sz9_UWmB",
    date: "Mar 05 2024",
  },
  {
    title: "Project 4",
    description: "Nulla facilisi. Sed vel ipsum vel.",
    link: "/project4",
    video: "https://www.youtube.com/embed/xuP4g7IDgDM?si=l8269Zo1Sz9_UWmB",
    date: "Mar 05 2024",
  },
  {
    title: "Project 5",
    description:
      "Donec sagittis mauris id libero bibendum, vel tristique neque vulputate.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/project2",
    video: "https://www.youtube.com/embed/xuP4g7IDgDM?si=l8269Zo1Sz9_UWmB",
    date: "Mar 05 2024",
  },
  {
    title: "Project 6",
    description:
      "Donec sagittis mauris id libero bibendum, vel tristique neque vulputate.",
    link: "/project2",
    video: "https://www.youtube.com/embed/xuP4g7IDgDM?si=l8269Zo1Sz9_UWmB",
    date: "Mar 05 2024",
  },
  {
    title: "Project 7",
    description:
      "Donec sagittis mauris id libero bibendum, vel tristique neque vulputate.",
    link: "/project2",
    video: "https://www.youtube.com/embed/xuP4g7IDgDM?si=l8269Zo1Sz9_UWmB",
    date: "Mar 05 2024",
  },
  {
    title: "Project 8",
    description:
      "Donec sagittis mauris id libero bibendum, vel tristique neque vulputate.",
    link: "/project2",
    video: "https://www.youtube.com/embed/xuP4g7IDgDM?si=l8269Zo1Sz9_UWmB",
    date: "Mar 05 2024",
  },
]);
</script>
<template>
  <div class="px-7 py-10 overflow-x-hidden">
    <div class="max-w-prose m-auto mb-8">
      <h1 class="text-black text-4xl font-extrabold mb-4 dark:text-secondary">Demos</h1>
      <p class="italic">Demonstrations for projects</p>
    </div>
    <article>
      <div
        class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 slide-enter-content"
      >
        <div
          v-for="(demo, index) in demos"
          :key="index"
          class="break-inside-avoid-column border-1 border-primary rounded-lg shadow-sm hover:shadow-lg hover:scale-101 transform duration-500 overflow-hidden"
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