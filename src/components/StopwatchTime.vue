<script setup lang="ts">
import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/vue/24/outline";
import { ref, computed, onMounted } from "vue";

const props = defineProps({
  startTime: {
    default: "00:00:00",
    type: String,
  },
});

const isRunning = ref(false);
const startTime = ref(0);
const elapsedTime = ref(0);

const formatTime = computed(() => {
  const totalSeconds = Math.floor(elapsedTime.value / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
});

const start = () => {
  if (!isRunning.value) {
    isRunning.value = true;
    startTime.value = Date.now() - elapsedTime.value;
    requestAnimationFrame(updateTime);
  }
};

const stop = () => {
  if (isRunning.value) {
    isRunning.value = false;
  }
};

const reset = () => {
  elapsedTime.value = 0;
};

const updateTime = () => {
  if (isRunning.value) {
    elapsedTime.value = Date.now() - startTime.value;
    requestAnimationFrame(updateTime);
  }
};

const toggleTime = () => {
  if (!isRunning.value) {
    start();
  } else {
    stop();
  }
};

onMounted(() => {
  const [hours, minutes, seconds] = props.startTime.split(":").map(Number);
  const totalMilliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;
  elapsedTime.value = totalMilliseconds;
});
</script>

<template>
  <div class="flex gap-2 pt-1">
    <div class="font-medium" @click="toggleTime">{{ formatTime }}</div>
    <div class="">
      <button @click="start" :disabled="isRunning">
        <PlayCircleIcon class="w-6 h-6" />
      </button>
      <button @click="stop" :disabled="!isRunning">
        <PauseCircleIcon class="w-6 h-6" />
      </button>
      <button @click="reset" :disabled="isRunning">
        <svg
          class="w-6 h-6"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#000000"
            stroke-width="1.5"
          ></circle>
          <path
            d="M16.583 9.667C15.81 8.097 14.043 7 11.988 7 9.388 7 7.25 8.754 7 11"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M14.494 9.722H16.4a.6.6 0 00.6-.6V7.5M7.417 13.667C8.191 15.629 9.957 17 12.012 17c2.6 0 4.736-2.193 4.988-5"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M9.506 13.622H7.6a.6.6 0 00-.6.6V16.4"
            stroke="#000000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
