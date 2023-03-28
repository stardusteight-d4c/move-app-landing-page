<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  percentage: {
    type: Number,
    required: true,
  },
})
const circleStyle = computed((): { 'stroke-dashoffset': number } => {
  const circumference = Math.round(2 * 3.14 * 60) // 376,8
  const fillLength = circumference - (circumference * props.percentage) / 100 
  return {
    'stroke-dashoffset': fillLength,
  }
})
</script>

<template>
  <svg :key="percentage" :style="{ '--percentage': percentage }">
    <circle cx="50%" cy="50%" r="60" opacity="0.5" stroke="#FFFFFF90" />
    <circle
      cx="50%"
      cy="50%"
      r="60"
      stroke="#FFFFFF"
      :style="circleStyle"
    />
  </svg>
</template>

<style scoped>
svg {
  width: 175px;
  height: 175px;
  transform: rotate(-90deg);
}
svg circle {
  stroke-width: 16px;
  fill: none;
  stroke-dasharray: 376.8; /* circumference */
}
svg circle:nth-child(1) {
  stroke-dashoffset: 0;
}
svg circle:nth-child(2) {
  /* (2 * π * r) -> 2 * 3,14 * 60 = 376.8 circumference  */
  stroke-dashoffset: calc(376.8 - (376.8 * var(--percentage)) / 100);
  stroke-linecap: round;
}
</style>
