<script setup lang="ts">
import { ref } from "vue";
import NavItem from "./NavItem.vue";
import { ArchiveBoxIcon, ClockIcon } from "@heroicons/vue/24/outline";

const navItems = {
  timelines: ClockIcon,
  archive: ArchiveBoxIcon,
};

let currentPage = ref("timelines");
</script>

<template>
  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <NavItem
        v-for="(icon, page) in navItems"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 pointer-events-none': currentPage === page }"
        @click="currentPage = page"
      >
        <component :is="icon" class="h-6 w-6" /> {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
