<script setup lang="ts">
import Navbar from './Navbar.vue'
import { arrowRight, appWindow, play } from '../assets'
</script>

<template>
  <section
    class="bg-hero-mobile sm:bg-hero-tablet lg:bg-hero-desktop relative bg-100% xl:bg-cover w-screen min-h-screen py-28 2xl:py-0 2xl:h-screen overflow-hidden"
  >
    <Navbar />
    <div
      class="max-w-7xl mx-4 md:mx-10 md:mt-8 xl:mx-auto my-auto h-full flex flex-col justify-around"
    >
      <div class="max-w-[500px] md:w-[500px] h-fit">
        <span
          class="updated-span text-sm md:text-base cursor-pointer gax-x-[4px] md:gap-x-[8px] whitespace-nowrap mb-4 2xl:mb-[30px]"
          >Updated for iOS 16
          <img :src="arrowRight" width="16" height="16" class="arrow-right"
        /></span>
        <h1
          class="font-extrabold text-4xl sm:text-5xl md:text-6xl !leading-[1.2] mb-4 2xl:mb-[30px]"
        >
          Meet Move <br />
          The best app <br />
          for active people
        </h1>
        <p class="text-lg !leading-[1.2] mb-[30px]">
          Blood Oxygen app measurements are not intended for medical use,
          including self-diagnosis or consultation with a doctor, and are only
          designed for general fitness and wellness purposes.
        </p>
        <div class="flex flex-col md:flex-row md:items-center gap-5">
          <button class="button-gradient text-black font-semibold">
            <img :src="appWindow" class="mr-4" /> Get the App
          </button>
          <button class="button-blur text-white font-semibold">
            <img :src="play" class="mr-4" /> Watch video
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.arrow-right {
  animation: bounce-right 1.5s infinite;
}

@keyframes bounce-right {
  0% {
    transform: translateX(0);
    animation-timing-function: ease-in;
  }
  50% {
    transform: translateX(10px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateX(0);
    animation-timing-function: ease-in;
  }
}

.updated-span {
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  background-color: rgba(255, 255, 255, 0.1);
  align-content: center;
  gap: 10;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .updated-span {
    padding: 2px 10px 2px 8px;
  }
}
.button-gradient {
  flex-shrink: 0;
  width: 220px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  align-items: center;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  background: linear-gradient(115deg, #ffb3b3 0%, hsl(240, 100%, 65%) 100%);
  overflow: visible;
  position: relative;
  padding: 0px 0px 0px 0px;
  align-content: center;
  flex-wrap: wrap;
  gap: 16;
  border-radius: 24px 24px 24px 0px;
}

.button-blur {
  box-sizing: border-box;
  flex-shrink: 0;
  width: 220px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  background-color: rgba(0, 0, 0, 0.1);
  overflow: visible;
  position: relative;
  padding: 0px 0px 0px 0px;
  align-content: center;
  flex-wrap: wrap;
  gap: 16;
  border-radius: 24px 24px 24px 0px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
