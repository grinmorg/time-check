<script setup lang="ts">
import NavItem from "./NavItem.vue";
import { NAV_ITEMS, PAGE_ARCHIVE, PAGE_TIMELINES } from "../constants";

defineProps({
  currentPage: {
    required: true,
    type: String,
    validator(currentPage: string) {
      // Проверяет есть ли такая страница в списке страниц
      return Object.keys(NAV_ITEMS).includes(currentPage);
    },
  },
});

const emit = defineEmits(["navigate"]);
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 pointer-events-none': currentPage === page }"
        @click="emit('navigate', page)"
      >
        <component :is="icon" class="h-6 w-6" />

        <span v-if="page === PAGE_TIMELINES"> Время </span>
        <span v-if="page === PAGE_ARCHIVE">История</span>
      </NavItem>
    </ul>
  </nav>
</template>
