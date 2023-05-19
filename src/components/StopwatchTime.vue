<script setup lang="ts">
import {
  PauseCircleIcon,
  PlayCircleIcon,
  XCircleIcon,
} from "@heroicons/vue/24/outline";
import { ref, computed, onMounted } from "vue";
import { watch } from "vue";

const props = defineProps({
  startTime: {
    default: "00:00:00",
    type: String,
  },
});

const emit = defineEmits(["update-time", "update-has-time"]);

const isRunning = ref(false);
const startTime = ref(0);
const elapsedTime = ref(0);

const formatTime = computed(() => {
  const totalSeconds = Math.floor(elapsedTime.value / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const stringTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return stringTime;
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
  emit("update-has-time", false);
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
  if (typeof props.startTime === "string") {
    const [hours, minutes, seconds] = props.startTime?.split(":")?.map(Number);
    const totalMilliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;
    elapsedTime.value = totalMilliseconds;
  }
});

// раз в 10 сек - обновляю через emit время
watch(elapsedTime, (newValue) => {
  const roundedValue = Math.round(newValue / 100) * 100;

  if (roundedValue % 3000 === 0) {
    emit("update-time", formatTime.value);
  }
});
</script>

<template>
  <div class="flex items-center min-w-[160px]">
    

    <div class="flex gap-2 pt-1">
      <div class="font-medium cursor-pointer" @click="toggleTime">
        {{ formatTime }}
      </div>
      <div>
        <button @click="start" :disabled="isRunning">
          <PlayCircleIcon
            class="w-6 h-6"
            :class="{ 'cursor-not-allowed opacity-40': isRunning }"
          />
        </button>
        <button @click="stop" :disabled="!isRunning">
          <PauseCircleIcon
            class="w-6 h-6"
            :class="{ 'cursor-not-allowed opacity-40': !isRunning }"
          />
        </button>
        <button @click="reset" :disabled="isRunning">
          <XCircleIcon
            class="w-6 h-6"
            :class="{ 'cursor-not-allowed opacity-40': isRunning }"
          />
        </button>
      </div>
    </div>
  </div>
</template>
