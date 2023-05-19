<script lang="ts">
import { ref } from "vue";
import { getRandomNumber } from "../functions";

export default {
  inheritAttrs: false,
  emits: ["change"],
  props: {
    label: {
      type: String,
    },
    checked: {
      default: false,
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const checkboxId = `checkbox-${getRandomNumber()}`;

    function handleChange(event: Event) {
      const isCheckedValue = (event.target as HTMLInputElement).checked;
      emit("change", isCheckedValue);
    }

    return {
      handleChange,
      checkboxId,
    };
  },
};
</script>

<template>
  <div class="flex items-center">
    <input
      v-bind="$attrs"
      :id="checkboxId"
      type="checkbox"
      :checked="checked"
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
