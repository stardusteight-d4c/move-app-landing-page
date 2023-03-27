<script setup lang="ts">
import {
  framerLogo,
  appleLogo,
  stripeLogo,
  instagramLogo,
  slackLogo,
  heart,
  handHeart,
  batteryFull,
} from '../assets'
</script>

<template>
  <section class="bg-[#121316] relative py-[100px] w-screen">
    <div
      class="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center"
    >
      <div class="w-[350px] px-4 md:px-0 md:w-[500px] text-center">
        <h2 class="font-bold text-2xl mb-[30px]">
          Trusted by 8,000 companies worldwide
        </h2>
        <p class="font-medium !leading-6 mb-[30px]">
          Replace your regular desk at work with a standing desk to reduce the
          amount of sedentary time in your day. Standing up means you’re likely
          to move around and burn more calories.
        </p>
      </div>
      <div
        class="grid grid-cols-2 gap-8 md:flex items-center gap-x-[80px] mmd:gap-x-[120px]"
      >
        <div class="logo-company shadow-md shadow-black/50 flex col-span-1">
          <img :src="framerLogo" width="32" height="32" alt="Framer" />
        </div>
        <div class="logo-company shadow-md shadow-black/50 flex col-span-1">
          <img :src="appleLogo" width="32" height="32" alt="Apple" />
        </div>
        <div class="logo-company shadow-md shadow-black/50 hidden md:flex">
          <img :src="stripeLogo" width="32" height="32" alt="Stripe" />
        </div>
        <div class="logo-company shadow-md shadow-black/50 flex col-span-1">
          <img :src="instagramLogo" width="32" height="32" alt="Instagram" />
        </div>
        <div class="logo-company shadow-md shadow-black/50 flex col-span-1">
          <img :src="slackLogo" width="32" height="32" alt="Slack" />
        </div>
      </div>
      <div class="h-0 border-t w-1/2 my-[30px] border-t-[#FFFFFF20]" />
      <h4 class="font-bold text-[22px] mb-[30px]">Designed to impress</h4>
      <div
        class="grid grid-cols-1 mdd:grid-cols-3 gap-y-8 mdd:gap-[10px] mx-4 mmd:mx-0 mmd:gap-x-[30px]"
      >
        <div
          class="col-span-1 shadow-md shadow-black/50 flex flex-col gap-y-[10px] w-[250px] items-center justify-center bg-[#00000066] rounded-[25px] py-[30px] px-[20px]"
        >
          <img :src="heart" alt="pen/icon" />
          <h4 class="font-bold">Quality of life</h4>
          <p class="text-center text-sm font-medium text-white/70">
            Control the health of your team. Offer rewards and have a more
            motivated team.
          </p>
        </div>
        <div
          class="col-span-1 shadow-md shadow-black/50 flex flex-col gap-y-[10px] w-[250px] items-center justify-center bg-[#00000066] rounded-[25px] py-[30px] px-[20px]"
        >
          <img :src="handHeart" alt="pen/icon" />
          <h4 class="font-bold">More performance</h4>
          <p class="text-center text-sm font-medium text-white/70">
            A healthier team is a more active, creative and inspiring team for
            your business.
          </p>
        </div>
        <div
          class="col-span-1 shadow-md shadow-black/50 flex flex-col gap-y-[10px] w-[250px] items-center justify-center bg-[#00000066] rounded-[25px] py-[30px] px-[20px]"
        >
          <img :src="batteryFull" alt="pen/icon" />
          <h4 class="font-bold">Full energy</h4>
          <p class="text-center text-sm font-medium text-white/70">
            Improve teamwork and deliver more results with a team full of
            energy.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo-company {
  background-color: #00000066;
  width: 64px;
  height: 64px;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
