<script setup lang="ts">
import { ref } from "vue";
import { normalizePageHash } from "./functions";
import TheHeader from "./components/TheHeader.vue";
import TheNav from "./components/TheNav.vue";
import TheArchive from "./pages/TheArchive.vue";
import TheTimelines from "./pages/TheTimelines.vue";
import { PAGE_ARCHIVE, PAGE_TIMELINES } from "./constants";
import { useTimelinesStore } from "./stores/timelines";
// import { computed } from "vue";
// import { onMounted } from "vue";
// import { watch } from "vue";

// const storeTimelines = useTimelinesStore();

const currentPage = ref(normalizePageHash());

function goTo(page: string) {
  currentPage.value = page;
}

// const pageTitle = computed(() => {
//   const lastUpdateItem = storeTimelines.getLastUpdateTimelineItem;

//   if (lastUpdateItem) {
//     return `TimeCheck ${lastUpdateItem.time}`; // Update this based on your item's property
//   } else {
//     return "TimeCheck";
//   }
// });

// onMounted(() => {
//   if (pageTitle.value) {
//     document.title = pageTitle.value; // Set the initial page title
//   }
// });

// // Update the page title whenever the getter value changes
// watch(pageTitle, (newValue) => {
//   document.title = newValue;
// });
</script>

<template>
  <TheHeader @navigate="goTo" />

  <main class="flex-grow flex flex-col container mx-auto mt-4">
    <TheTimelines v-show="currentPage === PAGE_TIMELINES" />
    <TheArchive v-show="currentPage === PAGE_ARCHIVE" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo" />
</template>
