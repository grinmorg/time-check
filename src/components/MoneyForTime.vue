<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  time: {
    default: "00:00:00",
    type: String,
  },
  priceForHour: {
    type: [String, Number],
  },
});

const money = computed(() => {
  let priceForHour;

  const [hours, minutes, _] = props.time?.split(":")?.map(Number);

  if (props.priceForHour) {
    if (typeof props.priceForHour === "string") {
      priceForHour = parseInt(props.priceForHour);
    } else if (typeof props.priceForHour === "number") {
      priceForHour = props.priceForHour;
    } else {
      console.warn(
        "Невозможно рассчитать стоимость за час в компоненте MoneyForTime - неправильный формат цены за час: ",
        typeof props.priceForHour
      );
      return;
    }
  } else {
    console.warn(
      "Невозможно рассчитать стоимость за час в компоненте MoneyForTime - нету цены за час"
    );

    return;
  }

  const timeInMinutes = hours * 60 + minutes;

  return Math.round((timeInMinutes * priceForHour) / 60);
});
</script>

<template>
  <p>
    Заработано: <span class="font-medium">{{ money }}</span>
    ₽
  </p>
</template>
