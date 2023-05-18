<script setup lang="ts">
import TimelineItem from "../components/TimelineItem.vue";
import Button from "../components/Button.vue";
import { generateUniqueId } from "../functions";
import { useTimelinesStore } from "../stores/timelines";
import { onMounted } from "vue";

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
    <ul>
      <TimelineItem
        v-for="item in storeTimelines.items"
        :key="item.id"
        :item="item"
        @delete="storeTimelines.removeItem(item.id)"
      />
    </ul>

    <div class="flex justify-center mt-4">
      <Button text="Добавить" @click="addNewTimeline" />
    </div>
  </div>
</template>
