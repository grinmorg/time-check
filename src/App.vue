<script setup lang="ts">
import { ref } from "vue";
import { normalizePageHash } from "./functions";
import TheHeader from "./components/TheHeader.vue";
import TheNav from "./components/TheNav.vue";
import TheArchive from "./pages/TheArchive.vue";
import TheTimelines from "./pages/TheTimelines.vue";
import { PAGE_ARCHIVE, PAGE_TIMELINES } from "./constants";

const currentPage = ref(normalizePageHash());

function goTo(page: string) {
  currentPage.value = page;
}
</script>

<template>
  <TheHeader @navigate="goTo($event)" />

  <main class="flex-grow flex flex-col">
    <TheTimelines v-show="currentPage === PAGE_TIMELINES" />
    <TheArchive v-show="currentPage === PAGE_ARCHIVE" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo" />
</template>
