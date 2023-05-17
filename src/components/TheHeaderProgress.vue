<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { PAGE_TIMELINES } from '../constants'
</script>

<template>
  <a :href="`#${PAGE_TIMELINES}`" class="text-sm">
    <div v-if="false" class="flex items-center gap-1">
      Ничего нет!
      <CheckCircleIcon class="h-7 text-green-500" />
    </div>
    <div v-else class="flex items-center gap-1">
      <div>Всего: <span class="font-mono">7/11</span></div>
      <div class="h-3 w-3 rounded-full bg-red-500"></div>
    </div>
  </a>
</template>