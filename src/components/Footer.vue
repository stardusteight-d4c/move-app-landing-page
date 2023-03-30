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
  <footer class="top-inset-shadow py-[100px]">
    <div class="flex px-4 flex-col items-center justify-center gap-y-[30px]">
      <img
        :src="designCode"
        class="w-[64px] h-[64px] object-cover rounded-full mx-auto"
      />
      <div class="flex flex-col-reverse llg:flex-row gap-x-[56px] w-full sm:w-auto">
        <div class="flex mx-auto w-fit flex-col sm:flex-row sm:w-auto items-start gap-y-[17px] sm:gap-y-0 sm:items-center justify-center gap-x-[56px] mt-[30px] llg:mb-0">
          <ul class="flex flex-col gap-y-[17px]">
            <li
              class="effect-underline relative flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer"
            >
              <Stack width="30" height="30" />Features
            </li>
            <li
              class="effect-underline relative flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer"
            >
              <SealCheck width="30" height="30" />Community
            </li>

            <li
              class="effect-underline relative flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer"
            >
              <Files width="30" height="30" />Docs
            </li>
          </ul>
          <ul class="flex flex-col gap-y-[17px]">
            <li
              class="effect-underline relative flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer"
            >
              <Envelope width="30" height="30" />Contact
            </li>
            <li
              class="effect-underline relative flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer"
            >
              <Info width="30" height="30" />About us
            </li>
            <li
              class="effect-underline relative flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer"
            >
              <List width="30" height="30" />We hire
            </li>
          </ul>
          <ul class="flex flex-col gap-y-[17px]">
            <li
              class="effect-underline relative flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer"
            >
              <Discord width="30" height="30" />Discord
            </li>
            <li
              class="effect-underline relative flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer"
            >
              <Youtube width="30" height="30" />Youtube
            </li>
            <li
              class="effect-underline relative flex items-center gap-x-[10px] font-bold text-sm uppercase cursor-pointer"
            >
              <Instagram width="30" height="30" />Instagram
            </li>
          </ul>
        </div>

        <form class="newsletter-box w-full sm:w-auto">
          <Pen />
          <span class="font-bold uppercase text-sm"
            >subscribe to the newsletter</span
          >
          <div class="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-[10px]">
            <input
              type="email"
              placeholder="email@framer.com"
              class="w-full sm:max-w-[360px] bg-[#ebebeb] p-[15px] rounded-lg text-black outline-none font-medium text-lg"
            />
            <button class="bg-black whitespace-nowrap p-[16px] rounded-lg font-bold text-lg">
              Sign Up
            </button>
          </div>
          <span class="text-white/70 text-sm font-medium">No spam ever.</span>
        </form>
      </div>
      <div class="h-0 mx-auto border-t w-1/2 my-[30px] border-t-[#FFFFFF20]" />
      <div class="flex items-center flex-col sm:flex-row justify-center gap-x-[20px]">
        <span class="font-medium text-center mb-[30px] sm:mb-0"
          >Copyright © 2022 - {{ new Date().getFullYear() }} DesignCode &
          Stardusteight</span
        >
        <a href="#" class="effect-underline relative uppercase font-medium">Terms</a>
        <a href="#" class="effect-underline relative uppercase font-medium">Privacy Policy</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.top-inset-shadow {
  -webkit-box-shadow: inset 0px 7px 6px 0px rgba(0, 0, 0, 0.88);
  -moz-box-shadow: inset 0px 7px 6px 0px rgba(0, 0, 0, 0.88);
  box-shadow: inset 0px 7px 6px 0px rgba(0, 0, 0, 0.88);
}
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
