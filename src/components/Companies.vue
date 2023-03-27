<script setup lang="ts">
import {
  framerLogo,
  appleLogo,
  stripeLogo,
  instagramLogo,
  slackLogo,
} from '../assets'
</script>

<template>
  <section class="bg-[#1C1E2B] h-screen w-screen">
    <div class="max-w-7xl mx-auto flex flex-col items-center justify-center">
      <div class="w-[500px] text-center">
        <h2 class="font-bold text-2xl mb-5">
          Trusted by 8,000 companies worldwide
        </h2>
        <p class="font-medium !leading-[1.2] mb-5">
          Replace your regular desk at work with a standing desk to reduce the
          amount of sedentary time in your day. Standing up means you’re likely
          to move around and burn more calories.
        </p>
      </div>
      <div class="flex items-center gap-x-[120px]">
        <div class="logo-company">
          <img :src="framerLogo" width="42" height="42" alt="Framer" />
        </div>
        <div class="logo-company">
          <img :src="appleLogo" width="42" height="42" alt="Apple" />
        </div>
        <div class="logo-company">
          <img :src="stripeLogo" width="42" height="42" alt="Stripe" />
        </div>
        <div class="logo-company">
          <img :src="instagramLogo" width="42" height="42" alt="Instagram" />
        </div>
        <div class="logo-company">
          <img :src="slackLogo" width="42" height="42" alt="Slack" />
        </div>
      </div>
      <h4>Designed to impress</h4>
    </div>
  </section>
</template>

<style scoped>
.logo-company {
  background-color: #121316;
  width: 64px;
  height: 64px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
