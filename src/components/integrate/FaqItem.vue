<script setup lang="ts">
import { ref } from 'vue'
import Plus from '../../atoms/icons/Plus.vue'
import X from '../../atoms/icons/X.vue'

defineProps({
  title: {
    type: String,
  },
  info: {
    type: String,
  },
})

const openInfo = ref(false)
</script>

<template>
  <div class="faq-item text-[22px] font-bold">
    <h2 class="flex items-center justify-between">
      {{ title }}
      <div>
        <Plus
          v-if="!openInfo"
          @click="openInfo = true"
          class="cursor-pointer"
        />
        <X v-if="openInfo" @click="openInfo = false" class="cursor-pointer" />
      </div>
    </h2>
    <div v-if="openInfo">
      <div class="h-0 border-t w-full my-[10px] border-t-[#FFFFFF20]" />
      <p class="font-medium text-base">
        {{ info }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.faq-item {
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  height: min-content; /* 72px */
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px 20px;
  justify-content: space-between;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  background-color: rgba(0, 0, 0, 0.4);
  max-width: 800px;
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 10;
  border-radius: 25px;
}
</style>
