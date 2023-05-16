<script setup lang="ts">
import TimelineItem from "../components/TimelineItem.vue";
</script>

<template>
  <div>
    <h1 class="text-3xl text-center font-medium">Timelines list</h1>
    <ul>
      <TimelineItem v-for="i in 6" :key="i" :ready="i === 5" />
    </ul>
  </div>
</template>
