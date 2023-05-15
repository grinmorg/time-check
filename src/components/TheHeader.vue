<script setup lang="ts">
import { PAGE_TIMELINES, PAGE_ARCHIVE } from "../constants";
import { isPageValid } from "../validators";
import TheLogo from "./TheLogo.vue";
import TheHeaderProgress from "./TheHeaderProgress.vue";

const emit = defineEmits({
  navigate: isPageValid,
});
</script>

<template>
  <header
    class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3"
  >
    <TheLogo @click="emit('navigate', PAGE_TIMELINES)" />
    <TheHeaderProgress @click="emit('navigate', PAGE_ARCHIVE)" />
  </header>
</template>
