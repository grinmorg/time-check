<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  link: {
    default: null,
    type: String,
  },
  target: {
    type: String,
    default: "_self",
  },
  text: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    default: "",
  },
});

const resolvedLink = computed(() =>
  typeof props.link === "string" ? props.link : undefined
);
const component = computed(() => (props.link ? "a" : "button"));
</script>

<template>
  <component
    :is="component"
    :href="resolvedLink"
    :target="target"
    :class="`py-3 px-5 text-white bg-green-500 hover:bg-green-800 rounded shadow shadow-slate-700 cursor-pointer transition duration-300 ${classes}`"
  >
    {{ text }}
  </component>
</template>
