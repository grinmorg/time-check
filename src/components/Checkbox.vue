<script setup lang="ts">
import { defineProps, ref } from "vue";

defineProps({
  label: {
    type: String,
  },
});

const emit = defineEmits(["change"]);

const checkboxId = `checkbox-${Math.random().toString(36).substring(2, 15)}`;

const isChecked = ref(false);

function handleChange(event: Event) {
  const isCheckedValue = (event.target as HTMLInputElement).checked;
  isChecked.value = isCheckedValue;
  emit("change", isCheckedValue);
}
</script>

<template>
  <div class="flex items-center">
    <input
      :id="checkboxId"
      type="checkbox"
      v-model="isChecked"
      @change="handleChange"
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      v-if="label"
      :for="checkboxId"
      class="ml-2 text-sm font-medium text-gray-900"
      >{{ label }}</label
    >
  </div>
</template>
