<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import { PAGE_TIMELINES } from "../constants";
import { useTimelinesStore } from "../stores/timelines";
import { computed } from "vue";

const storeTimelines = useTimelinesStore();

const allItemsLength = computed(() => {
  const allItems = storeTimelines.items;

  return allItems?.length;
});

const readyItemsLength = computed(() => {
  const readyItems = storeTimelines.getReadyItems;

  return readyItems?.length;
});
</script>

<template>
  <a :href="`#${PAGE_TIMELINES}`" class="text-sm">
    <div v-if="false" class="flex items-center gap-1">
      Ничего нет!
      <CheckCircleIcon class="h-7 text-green-500" />
    </div>
    <div v-else class="flex items-center gap-1">
      <div>
        Готово:
        <span class="font-mono"
          >{{ readyItemsLength }}/{{ allItemsLength }}</span
        >
      </div>
      <div v-if="readyItemsLength === allItemsLength" class="h-3 w-3 rounded-full bg-green-500"></div>
      <div v-else class="h-3 w-3 rounded-full bg-orange-500"></div>
    </div>
  </a>
</template>
