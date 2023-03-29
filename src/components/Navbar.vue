<script setup lang="ts">
import { Hourglass, Stack, SealCheck, Files } from './atoms/icons'
</script>

<template>
  <nav
    class="max-w-7xl mx-4 md:mx-10 absolute inset-x-0 top-0 pt-4 md:pt-7 2xl:pt-[48px] pb-8 xl:mx-auto flex items-center justify-between"
  >
    <div class="logo">
      <Hourglass width="32" height="32" />
    </div>
    <div class="hidden md:flex items-center gap-x-20">
      <div class="flex items-center gap-x-[10px] cursor-pointer">
        <Stack color="#FFFFFF" width="30" height="30" />
        <span class="uppercase font-bold !leading-[1.2]">Features</span>
      </div>
      <div class="flex items-center gap-x-[10px] cursor-pointer">
        <SealCheck width="30" height="30" />
        <span class="uppercase font-bold !leading-[1.2]">Community</span>
      </div>
      <div class="flex items-center gap-x-[10px] cursor-pointer">
        <Files width="30" height="30" />
        <span class="uppercase font-bold !leading-[1.2]">Docs</span>
      </div>
    </div>
    <button
      class="button-default text-sm md:text-base whitespace-nowrap uppercase font-bold hover:text-[#121316] hover:bg-white hover:scale-105 active:scale-100 transition-all duration-300 ease-in"
    >
      Sign In
    </button>
  </nav>
</template>

<style scoped>
.logo {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff75a1 0%, #1a40ff 100%);
  overflow: visible;
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.button-default {
  box-sizing: border-box;
  flex-shrink: 0;
  width: min-content; /* 88px */
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 16px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: wrap;
  gap: 16;
  border-radius: 24px 24px 24px 0px;
  border: 1px solid #ffffff;
}
</style>
