<script setup lang="ts">
import { computed } from "vue";
import {
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_DEFAULT,
  BUTTON_TYPE_ACCESS,
} from "../constants";
import { isButtonTypeValid } from "../validators";

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
  type: {
    default: BUTTON_TYPE_DEFAULT,
    type: String,
    validator: isButtonTypeValid,
  },
});

const resolvedLink = computed(() =>
  typeof props.link === "string" ? props.link : undefined
);
const component = computed(() => (props.link ? "a" : "button"));

const typeClasses: { [key: string]: string } = {
  [BUTTON_TYPE_DANGER]: "bg-red-500 enabled:hover:bg-red-600 text-white",
  [BUTTON_TYPE_ACCESS]: "bg-green-500 enabled:hover:bg-green-700 text-white",
  [BUTTON_TYPE_DEFAULT]: "bg-gray-100 enabled:hover:bg-gray-200",
};
</script>

<template>
  <component
    :is="component"
    :href="resolvedLink"
    :target="target"
    :class="`${typeClasses[type]} py-3 px-5 rounded shadow shadow-slate-700 cursor-pointer transition duration-300 ${classes}`"
  >
    {{ text }}
  </component>
</template>
