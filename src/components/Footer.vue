<script setup lang="ts">
import { designCode } from '../assets/'
import {
  Stack,
  SealCheck,
  Files,
  Envelope,
  Info,
  List,
  Discord,
  Youtube,
  Instagram,
  Pen,
} from './atoms/icons'
</script>

<template>
  <footer class="py-[100px]">
    <div class="flex flex-col items-center justify-center gap-y-[30px]">
      <img
        :src="designCode"
        class="w-[64px] h-[64px] object-cover rounded-full mx-auto"
      />
      <div class="flex items-center justify-center gap-x-[56px]">
        <ul class="flex flex-col  gap-y-[17px]">
          <li
            class="flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer hover:underline"
          >
            <Stack width="30" height="30" />Features
          </li>
          <li
            class="flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer hover:underline"
          >
            <SealCheck width="30" height="30" />Community
          </li>

          <li
            class="flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer hover:underline"
          >
            <Files width="30" height="30" />Docs
          </li>
        </ul>
        <ul class="flex flex-col gap-y-[17px]">
          <li
            class="flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer hover:underline"
          >
            <Envelope width="30" height="30" />Contact
          </li>
          <li
            class="flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer hover:underline"
          >
            <Info width="30" height="30" />About us
          </li>
          <li
            class="flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer hover:underline"
          >
            <List width="30" height="30" />We hire
          </li>
        </ul>
        <ul class="flex flex-col gap-y-[17px]">
          <li
            class="flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer hover:underline"
          >
            <Discord width="30" height="30" />Discord
          </li>
          <li
            class="flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer hover:underline"
          >
            <Youtube width="30" height="30" />Youtube
          </li>
          <li
            class="flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer hover:underline"
          >
            <Instagram width="30" height="30" />Instagram
          </li>
        </ul>
        <form class="newsletter-box">
          <Pen />
          <span class="font-bold uppercase text-sm"
            >subscribe to the newsletter</span
          >
          <div class="flex items-center gap-x-[10px]">
            <input
              type="email"
              placeholder="email@framer.com"
              class="w-[360px] bg-[#ebebeb] p-[15px] rounded-lg text-black outline-none font-medium text-lg"
            />
            <button class="bg-black p-[16px] rounded-lg font-bold text-lg">
              Sign Up
            </button>
          </div>
          <span class="text-white/70 text-sm font-medium">No spam ever.</span>
        </form>
      </div>
      <div class="h-0 mx-auto border-t w-1/2 my-[30px] border-t-[#FFFFFF20]" />
      <div class="flex items-center justify-center gap-x-[20px]">
        <span class="font-medium">Copyright © 2022 - {{ new Date().getFullYear() }} DesignCode & Stardusteight</span>
        <a href="#" class="uppercase font-medium">Terms</a>
        <a href="#" class="uppercase font-medium">Privacy Policy</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.newsletter-box {
  height: min-content; /* 196px */
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 20px 20px 20px;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 10;
  border-radius: 25px;
}
</style>
