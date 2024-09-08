<script setup lang="ts">
import { ref } from "vue";

const getIconColorClass = (skillName: string) => {
  switch (skillName) {
    case "Javascript":
      return "text-yellow-500";
    case "Vue.js":
      return "text-green-500";
    case "TailWind CSS":
      return "text-blue-500";
    case "Laravel":
      return "text-red-500";
    case "Git":
      return "text-orange-500";
    default:
      return "text-primary";
  }
};

const skills = ref([
  { name: "Javascript", icon: ["fab", "js"] },
  { name: "Vue.js", icon: ["fab", "vuejs"] },
  { name: "TailWind CSS", icon: ["fab", "css3"] },
  //{ name: "Laravel", icon: ["fab", "laravel"] },
  {name: "Git", icon: ["fab", "git-alt"] },
]);

const educations = ref([
  { school: "Preah Monivong High School", date: "December 2020", description: "Bac II" },
  {
    school: "Cambodia ASEAN International Institute",
    date: "April 2021 - May 2023",
    description: "General English Program",
  },
  {
    school: "Royal University of Phnom Penh",
    date: "Mar 2021 - June 2024",
    description: "Information Technology of Engineering",
  },
]);

const exps = ref([
  {company: "Addbook Computer Centre", role: "Teacher", date: "Dec 2021 - Sep 2022"},
  {company: "Squeeze Asia", role: "Data Entry and Analysis", date: "Oct 2022 - Jul 2024"},
  {company: "(Volunteer)Impuls Cambodia", role: "Designer", date: "Aug 2022 - Present "}
]);
</script>

<template>
  <div class="min-h-screen py-10 px-6 overflow-x-hidden">
    <div class="max-w-prose m-auto mb-8">
      <h1 class="text-black text-4xl font-extrabold mb-0 dark:text-secondary">Lyhour NY</h1>
    </div>
    <article>
      <div class="max-w-prose m-auto slide-enter-content space-y-5">
        <p>
          Hey, I am Lyhour Ny, a Front-End Developer Crafting Engaging User
          Experiences.
        </p>
        <p>
          I have a passion for creating user-centric applications using modern
          web technologies. I am always eager to learn and contribute to the community.
        </p>
        <hr class="text-primary w-12 my-8 mx-auto" />
        <div class="flex flex-row flex-wrap gap-2 mt-2 slide-enter-content">
          <p>Skills</p>
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="flex items-center bg-box gap-2 rounded-sm px-1"
          >
            <font-awesome-icon :icon="skill.icon" :class="getIconColorClass(skill.name)" />
            <span>{{ skill.name }}</span>
          </div>
        </div>
        <p>Educations:</p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 slide-enter-content"
        >
          <div v-for="(education, index) in educations" :key="index">
            <div class="flex items-center">
              <div
                class="z-10 flex items-center justify-center w-6 h-6 bg-secondary-50 rounded-full ring-0 ring-secondary dark:bg-primary-50 sm:ring-8 dark:ring-gray-900 shrink-0"
              >
                <font-awesome-icon
                  icon="fa-solid fa-school"
                  class="w-2.5 h-2.5 text-primary dark:text-secondary"
                />
              </div>
              <div
                class="sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
              ></div>
            </div>
            <div class="mt-4 sm:pe-8">
              <p class="font-bold mb-1">
                {{ education.school }}
              </p>
              <time
                class="block mb-2 text-sm italic"
                >{{ education.date }}</time
              >
              <p>{{ education.description }}</p>
            </div>
          </div>
        </div>

        <p>Working experiences:</p>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 slide-enter-content"
        >
          <div v-for="(exp, index) in exps" :key="index">
            <div class="flex items-center">
              <div
                class="z-10 flex items-center justify-center w-6 h-6 bg-secondary-50 rounded-full ring-0 ring-secondary dark:bg-primary-50 sm:ring-8 dark:ring-gray-900 shrink-0"
              >
                <font-awesome-icon
                  icon="fa-solid fa-briefcase"
                  class="w-2.5 h-2.5 text-primary dark:text-secondary"
                />
              </div>
              <div
                class="sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"
              ></div>
            </div>
            <div class="mt-4 sm:pe-8">
              <p class="font-bold mb-1">
                {{ exp.company }}
              </p>
              <time
                class="block mb-2 text-sm italic"
                >{{ exp.date }}</time
              >
              <p>{{ exp.role }}</p>
            </div>
          </div>
        </div>
        <hr class="text-primary w-12 my-8 mx-auto" />
        <p>Connect with me!</p>
        <p class="flex flex-wrap gap-4 mt-2 dark:text-secondary">
          <a
            href="https://github.com/NyLyhuo"
            target="_blank"
            class="flex items-center gap-2 hover:underline transition-colors duration-300"
          >
            <font-awesome-icon :icon="['fab', 'github']" class="text-inherit" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lyhour-ny-968316212/"
            target="_blank"
            class="flex items-center gap-2 hover:text-blue-700 hover:underline transition-colors duration-300"
          >
            <font-awesome-icon
              icon="fa-brands fa-linkedin"
              class="text-inherit"
            />
            LinkedIn
          </a>
          <a
            href="https://t.me/bonglyhour"
            target="_blank"
            class="flex items-center gap-2 hover:text-blue-500 hover:underline transition-colors duration-300"
          >
            <font-awesome-icon
              icon="fa-brands fa-telegram"
              class="text-inherit"
            />
            Telegram
          </a>
          <a
            href="https://www.instagram.com/bonglyhour_?igsh=aWIxbXpqb3lyYmRr"
            target="_blank"
            class="flex items-center gap-2 hover:text-pink-500 hover:underline transition-colors duration-300"
          >
            <font-awesome-icon
              icon="fa-brands fa-instagram"
              class="text-inherit"
            />
            Instagram
          </a>
        </p>
      </div>
    </article>
  </div>
</template>