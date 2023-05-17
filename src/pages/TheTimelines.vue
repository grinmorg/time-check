<script setup lang="ts">
import { ref } from "vue";
import TimelineItem from "../components/TimelineItem.vue";
import Button from "../components/Button.vue";
import { generateUniqueId } from "../functions";

interface ITimelinesItem {
  id: string | number;
  name: string;
  time: string;
  ready: boolean;
}

const timelinesItems = ref<ITimelinesItem[]>([
  {
    id: 1,
    name: "Работа",
    time: "00:00:00",
    ready: false,
  },
  {
    id: "2",
    name: "Работа 2",
    time: "00:01:20",
    ready: true,
  },
]);

const removeTimeline = (id: number) => {
  timelinesItems.value = timelinesItems.value.filter((item) => item.id !== id);
};

const addNewTimeline = () => {
  timelinesItems.value.push({
    id: generateUniqueId(),
    name: "Новый",
    time: "00:00:00",
    ready: true,
  });
};
</script>

<template>
  <div>
    <h1 class="text-3xl text-center font-medium">Список</h1>
    <ul>
      <TimelineItem
        v-for="item in timelinesItems"
        :key="item.id"
        :item="item"
        @delete="removeTimeline"
      />
    </ul>

    <div class="flex justify-center mt-4">
      <Button text="Добавить" @click="addNewTimeline" />
    </div>
  </div>
</template>
