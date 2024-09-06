<script setup lang="ts">
import { onMounted, ref } from "vue";

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

const demos = ref([
  {
    title: "Lyhour-portfolio",
    description:
      "This project builds with Vue js, TypeScript and Tailwind CSS with animation.",
    link: "https://youtu.be/XCfi1mBPWY8",
    video: "/videos/portfolio.mp4",
    date: "Mar 05 2024",
  },
  {
    title: "Task Unity",
    description:
      "The management task app use Kotlin.",
    link: "https://youtu.be/mdJAHjpCws8",
    video: "/videos/task.mp4",
    date: "Jan 07 2024",
  },
  {
    title: "Menu Ordering",
    description:
      "We can view and order food on website.",
    link: "https://youtu.be/ULS8244sYD4",
    video: "/videos/odering.mp4",
    date: "May 25 2024",
  },
  {
    title: "plants vs zombies <Clone>",
    description:
      "Unity Hub, The objective is to prevent the zombies from reaching the player’s home at the far end of the screen.",
    link: "https://youtu.be/mdJAHjpCws8",
    video: "/videos/zombie .mp4",
    date: "May 25 2024",
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