<script setup lang="ts">
import TimelineItem from "../components/TimelineItem.vue";
import BaseButton from "../components/BaseButton.vue";
import { generateUniqueId } from "../functions";
import { useTimelinesStore } from "../stores/timelines";
import { onMounted } from "vue";
import { BUTTON_TYPE_ACCESS, BUTTON_TYPE_DANGER } from "../constants";

const storeTimelines = useTimelinesStore();

const addNewTimeline = () => {
  storeTimelines.addItem({
    id: generateUniqueId(),
    name: "Название",
    hasTime: false,
    time: "00:00:00",
    ready: false,
  });
};

onMounted(() => {
  // load items from local storage
  storeTimelines.loadItems();
});
</script>

<template>
  <div>
    <h1 class="text-3xl text-center font-medium">Список</h1>
    <ul class="max-w-xl mx-auto">
      <TimelineItem
        v-for="item in storeTimelines.items"
        :key="item.id"
        :item="item"
        @delete="storeTimelines.removeItem(item.id)"
      />
    </ul>

    <div class="flex justify-center mt-4">
      <BaseButton
        text="Добавить"
        :type="BUTTON_TYPE_ACCESS"
        @click="addNewTimeline"
      />
    </div>
  </div>
</template>
