<script setup lang="ts">
import { jumpstartCardContentStyles as css } from './styles'
</script>

<template>
  <div>
    <h3 :class="css.heading3">Lac Superieur</h3>
    <span :class="css.minAgoSpan">30 mins ago</span>
    <span :class="css.stepsSpan">3,054 Steps</span>
  </div>
  <div :class="css.flexCol">
    <button :class="css.moveButton">move</button>
    <span :class="css.spanHigher">3% higher</span>
  </div>
</template>
