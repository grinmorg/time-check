<script setup lang="ts">
import { ITimelinesItem } from "../@types/interfaces";
import { useTimelinesStore } from "../stores/timelines";
import StopwatchTime from "./StopwatchTime.vue";
import BaseInput from "./BaseInput.vue";
import BaseCheckbox from "./BaseCheckbox.vue";
import MoneyForTime from "./MoneyForTime.vue";
import { ref } from "vue";

const storeTimelines = useTimelinesStore();

const props = defineProps({
  item: {
    required: true,
    type: Object,
  },
});

const emit = defineEmits(["delete"]);

const updateItem = (type: string, value: boolean | string) => {
  switch (type) {
    case "has-time":
      const updatedHasTimeItem = { ...props.item, hasTime: value };
      storeTimelines.updateItemFields(updatedHasTimeItem as ITimelinesItem);
      break;
    case "time":
      const updatedTimeItem = { ...props.item, time: value };
      storeTimelines.updateItemFields(updatedTimeItem as ITimelinesItem);
      break;
    case "ready":
      const updatedReadyItem = { ...props.item, ready: value };
      storeTimelines.updateItemFields(updatedReadyItem as ITimelinesItem);
      break;
    case "name":
      const updatedNameItem = { ...props.item, name: value };
      storeTimelines.updateItemFields(updatedNameItem as ITimelinesItem);
      break;
    default:
      console.warn(
        "Проблема в функции updateItem из компонента TimelineItem | Неизвестный кейс"
      );

      break;
  }
};

const priceForHour = ref(1500);
</script>

<template>
  <li
    class="flex items-center border-b border-slate-200 py-3 px-2"
    :class="{ 'bg-green-200 rounded': props.item.ready }"
  >
    <div class="mr-2" @click="updateItem('ready', !props.item.ready)">
      <svg
        v-if="props.item.ready"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 text-slate-500"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 text-slate-500 hover:text-indigo-600 hover:cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>

    <div class="w-full">
      <div class="flex justify-between items-center gap-2">
        <BaseInput
          type="text"
          placeholder="Название"
          :value="props.item.name"
          :class="{ 'bg-green-200': props.item.ready }"
          @change="updateItem('name', $event)"
        />

        <button @click="emit('delete', props.item.id)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>

      <div class="flex justify-between items-center mt-2 gap-2">
        <BaseCheckbox
          :checked="props.item.hasTime"
          @change="updateItem('has-time', $event)"
          label="На время?"
        />
        <div v-if="props.item.hasTime" class="flex-1 flex relative">
          <div class="relative">
            <BaseInput
              placeholder="Ставка в час"
              :value="priceForHour"
              @change="priceForHour = $event"
              :class="{ 'bg-green-200': props.item.ready }"
              class="z-10 relative bg-transparent "
            />
            <p class="absolute bottom-0 right-0 bg-blue-500 p-1 rounded rounded-br-xl font-medium text-white text-sm z-0 ">Руб / час</p>
          </div>

          <StopwatchTime
            class="ml-4"
            :start-time="props.item.time"
            :has-time="props.item.hasTime"
            @update-has-time="updateItem('has-time', $event)"
            @update-time="updateItem('time', $event)"
          />

          <MoneyForTime :time="props.item.time" :price-for-hour="priceForHour" class=" absolute -bottom-2 right-0 text-sm text-gray-500 " />
        </div>
      </div>
    </div>
  </li>
</template>
