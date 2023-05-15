<script setup lang="ts">
import { ref } from "vue";
import { normalizePageHash } from "./functions";
import TheHeader from "./components/TheHeader.vue";
import TheNav from "./components/TheNav.vue";

const currentPage = ref(normalizePageHash());

function goTo(page: string) {
  currentPage.value = page;
}
</script>

<template>
  <TheHeader @navigate="goTo($event)" />

  <main class="flex-grow flex flex-col">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum suscipit!
  </main>

  <TheNav />
</template>
