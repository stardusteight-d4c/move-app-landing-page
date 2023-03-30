<script setup lang="ts">
import { onMounted } from 'vue'
import { Navbar } from '.'
import { ArrowRight, AppWindow, Play } from './atoms/icons'
import anime from 'animejs'
import { heroStyles as css } from './styles'

onMounted(() => {
  executeAnimation()
})

function executeAnimation() {
  anime({
    targets: '#text',
    translateX: [-100, 0],
    duration: 3000,
    easing: 'easeOutExpo',
  })
  anime({
    targets: '#background',
    translateX: [100, 0],
    duration: 3000,
    easing: 'easeOutExpo',
  })
}
</script>

<template>
  <section class="w-screen min-h-screen py-28 2xl:py-0 h-screen relative">
    <div
      id="background"
      class="bg-hero-mobile sm:bg-hero-tablet lg:bg-hero-desktop inset-0 absolute bg-100% xl:bg-cover w-screen min-h-screen py-28 2xl:py-0 h-screen"
    />
    <Navbar />
    <div
      id="text"
      class="max-w-7xl mx-4 md:mx-10 md:mt-8 xl:mx-auto my-auto h-full flex flex-col justify-around"
    >
      <div class="max-w-[500px] md:w-[500px] h-fit">
        <span
          class="updated-span-hero text-sm md:text-base cursor-pointer gax-x-[4px] md:gap-x-[8px] whitespace-nowrap mb-4 2xl:mb-[30px]"
          >Updated for iOS 16
          <ArrowRight width="16" height="16" class="arrow-right-animation"
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
          <button
            class="button-gradient-hero active:scale-100 transition-all duration-300 hover:scale-105 text-black font-semibold"
          >
            <AppWindow class="mr-4" /> Get the App
          </button>
          <button
            class="button-blur-hero active:scale-100 transition-all duration-300 hover:scale-105 text-white font-semibold"
          >
            <Play class="mr-4 text-[#FF88AA]" /> Watch video
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
