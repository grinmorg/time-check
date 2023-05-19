<script lang="ts">
import { getRandomNumber } from "../functions";

export default {
  inheritAttrs: false,
  emits: ["change"],
  props: {
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  setup(prop, { emit }) {
    const inputId = `input-${getRandomNumber()}`;

    const handleChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      emit("change", target.value);
    };

    return { inputId, handleChange };
  },
};
</script>

<template>
  <div class="w-full">
    <label
      v-if="label"
      :for="inputId"
      class="block mb-2 text-sm font-medium text-gray-900"
      >{{ label }}</label
    >
    <input
      v-bind="$attrs"
      type="text"
      :id="inputId"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      :placeholder="placeholder"
      :value="value"
      @input="handleChange"
    />
  </div>
</template>
