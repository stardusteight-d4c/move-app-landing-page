<script setup lang="ts">
import FaqItem from './integrate/FaqItem.vue'
import {
  Stack,
  Pen,
  Globe,
  Lock,
  Books,
  Person,
  Info,
  ToggleLeft,
  CreditCard,
  Medal,
} from './atoms/icons'
</script>

<template>
  <section class="bg-wallpaper-4 bottom-inset-shadow px-4 mt-[100px] pb-[100px] bg-cover">
    <div
      class="max-w-[500px] mx-auto gap-y-[30px] flex flex-col items-center justify-center"
    >
      <h2 class="font-extrabold text-4xl md:text-[50px]">Ready to start?</h2>
      <span class="text-[22px] font-bold text-center"
        >Launch a site for free. Choose a site plan to unlock more
        features.</span
      >
    </div>
    <div class="h-0 mx-auto border-t w-1/2 my-[30px] border-t-[#FFFFFF20]" />
    <div
      class="flex items-center flex-col md:flex-row justify-center gap-y-[30px] gap-x-[30px]"
    >
      <div class="card1">
        <div class="text-black flex flex-col items-center gap-y-[10px]">
          <h3
            class="font-semibold uppercase gap-y-[10px] flex flex-col items-center"
          >
            <Pen />Free plan
          </h3>
          <h4 class="font-extrabold text-4xl mmd:text-[50px] mb-[10px]">
            $15/mo
          </h4>
          <span
            class="blur-capsule bg-black/10 border border-black/10 font-medium text-sm flex items-center whitespace-nowrap gap-x-[10px]"
            >Up to 3 projects <Info width="16" height="16"
          /></span>
          <ul class="space-y-[10px]">
            <li class="flex items-center gap-x-[10px] font-inter">
              <Globe width="24" height="24" /> Custom domain
            </li>
            <li class="flex items-center gap-x-[10px] font-inter">
              <Lock width="24" height="24" /> Password protect
            </li>
            <li class="flex items-center gap-x-[10px] font-inter">
              <Books width="24" height="24" /> 10GB bandwidth
            </li>
            <li class="flex items-center gap-x-[10px] font-inter">
              <Stack width="24" height="24" /> 1,000 CMS items
            </li>
            <li class="flex items-center gap-x-[10px] font-inter">
              <Person width="24" height="24" /> 10,000 visitors
            </li>
          </ul>
          <div class="h-0 w-full border-t border-t-[#000000]/10" />
          <button
            class="button gap-x-4 font-semibold uppercase bg-black text-white"
          >
            <Pen width="30" height="30" />Try for free
          </button>
        </div>
      </div>
      <div class="card2">
        <div class="text-white flex flex-col items-center gap-y-[10px]">
          <span
            class="blur-capsule bg-white/10 border border-white/10 gap-x-[10px] font-semibold uppercase"
            ><Medal width="16" height="16" /> Popular</span
          >
          <div class="h-0 w-full border-t border-t-[#FFFFFF]/10" />
          <h3
            class="font-semibold uppercase gap-y-[10px] flex flex-col items-center"
          >
            <Pen />starter plan
          </h3>
          <h4 class="font-extrabold text-4xl mmd:text-[50px] mb-[10px]">
            $30/mo
          </h4>
          <span
            class="blur-capsule bg-white/10 border border-white/10 font-medium text-sm flex items-center whitespace-nowrap gap-x-[10px]"
            >Billed yearly <ToggleLeft width="16" height="16"
          /></span>
          <ul class="space-y-[10px]">
            <li class="flex items-center gap-x-[10px] font-inter">
              <Globe width="24" height="24" /> Custom domain
            </li>
            <li class="flex items-center gap-x-[10px] font-inter">
              <Lock width="24" height="24" /> Password protect
            </li>
            <li class="flex items-center gap-x-[10px] font-inter">
              <Books width="24" height="24" /> 10GB bandwidth
            </li>
            <li class="flex items-center gap-x-[10px] font-inter">
              <Stack width="24" height="24" /> 1,000 CMS items
            </li>
            <li class="flex items-center gap-x-[10px] font-inter">
              <Person width="24" height="24" /> 10,000 visitors
            </li>
          </ul>
          <div class="h-0 w-full border-t border-t-[#FFFFFF]/10" />
          <button
            class="button gap-x-4 font-semibold uppercase bg-white text-black"
          >
            <CreditCard />subscribe
          </button>
        </div>
      </div>
      <div class="card3">
        <div class="text-white flex flex-col items-center gap-y-[10px]">
          <h3
            class="font-semibold text-white/70 uppercase gap-y-[10px] flex flex-col items-center"
          >
            <Pen color="#FFFFFF" />pro plan
          </h3>
          <h4 class="font-extrabold text-4xl mmd:text-[50px] mb-[10px]">
            $45/mo
          </h4>
          <span
            class="blur-capsule bg-white/10 border border-white/10 font-medium text-sm flex items-center whitespace-nowrap gap-x-[10px]"
            >Billed yearly <ToggleLeft width="16" height="16"
          /></span>
          <ul class="space-y-[10px] text-white/70">
            <li class="flex items-center gap-x-[10px] font-inter">
              <Globe width="24" height="24" color="#FFFFFF" /> Custom domain
            </li>
            <li class="flex items-center gap-x-[10px] font-inter">
              <Lock width="24" height="24" color="#FFFFFF" /> Password protect
            </li>
            <li class="flex items-center gap-x-[10px] font-inter">
              <Books width="24" height="24" color="#FFFFFF" /> 10GB bandwidth
            </li>
            <li class="flex items-center gap-x-[10px] font-inter">
              <Stack width="24" height="24" color="#FFFFFF" /> 1,000 CMS items
            </li>
            <li class="flex items-center gap-x-[10px] font-inter">
              <Person width="24" height="24" color="#FFFFFF" /> 10,000 visitors
            </li>
          </ul>
          <div class="h-0 w-full border-t border-t-[#FFFFFF]/10" />
          <button
            class="button gap-x-4 font-semibold uppercase bg-white text-black"
          >
            <CreditCard />subscribe
          </button>
        </div>
      </div>
    </div>
    <div class="h-0 mx-auto border-t w-1/2 my-[30px] border-t-[#FFFFFF20]" />
    <div class="flex flex-col items-center justify-center">
      <h2 class="font-extrabold text-4xl md:text-[50px] mb-[30px]">FAQ</h2>
      <div
        class="flex flex-col items-center justify-center gap-y-[30px] w-full"
      >
        <FaqItem
          title="How are paid plans billed?"
          info="Paid plans are billed both at a Site and Team level. Both subscriptions
        are always linked to the email of the purchaser. In order to get extra
        features and faster loading time to your site, you can acquire any of
        our site plans. In the moment of purchasing the first site plan within a
        team, a Team account will be added automatically so editors will be
        charged at a team level."
        />
        <FaqItem
          title="How are editors billed?"
          info="Paid plans are billed both at a Site and Team level. Both subscriptions
        are always linked to the email of the purchaser. In order to get extra
        features and faster loading time to your site, you can acquire any of
        our site plans. In the moment of purchasing the first site plan within a
        team, a Team account will be added automatically so editors will be
        charged at a team level."
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.bottom-inset-shadow {
  -webkit-box-shadow: inset 0px -7px 6px 0px rgba(0, 0, 0, 0.88);
  -moz-box-shadow: inset 0px -7px 6px 0px rgba(0, 0, 0, 0.88);
  box-shadow: inset 0px -7px 6px 0px rgba(0, 0, 0, 0.88);
}
.card1 {
  max-width: 370px;
  width: 100%;
  padding-block: 20px;
  height: min-content; /* 471px */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  box-shadow: 0px 2.89483612233903px 2.89483612233903px 0px rgba(0, 0, 0, 0),
    0px 6.892677056377244px 6.892677056377244px 0px rgba(0, 0, 0, 0.00996),
    0px 12.55862685727885px 12.55862685727885px 0px rgba(0, 0, 0, 0.01815),
    0px 20.87830690109316px 20.87830690109316px 0px rgba(0, 0, 0, 0.03017),
    0px 33.73585244383122px 33.73585244383122px 0px rgba(0, 0, 0, 0.04875),
    0px 55.18945350909803px 55.18945350909803px 0px rgba(0, 0, 0, 0.07975),
    0px 95.0814091774674px 95.0814091774674px 0px rgba(0, 0, 0, 0.1374),
    0px 173px 173px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.6);
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 10;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.card2 {
  max-width: 370px;
  width: 100%;
  height: min-content; /* 567px */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0px 68px 0px;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  box-shadow: 0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0),
    0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996),
    0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815),
    0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017),
    0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875),
    0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975),
    0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374),
    0px 100px 100px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(0, 0, 0, 0.4);
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 10;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.card3 {
  max-width: 370px;
  width: 100%;
  padding-block: 20px;
  height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  box-shadow: 0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0),
    0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996),
    0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815),
    0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017),
    0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875),
    0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975),
    0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374),
    0px 100px 100px 0px rgba(0, 0, 0, 0.25);
  background-color: #000000;
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 10;
  border-radius: 25px;
}

.blur-capsule {
  box-sizing: border-box;
  flex-shrink: 0;
  width: min-content; /* 153px */
  height: min-content; /* 29px */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 16px 4px 8px;
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 10;
  border-radius: 20px;
}

.button {
  flex-shrink: 0;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  max-width: 220px;
  overflow: visible;
  position: relative;
  padding: 0px 0px 0px 0px;
  align-content: center;
  flex-wrap: wrap;
  border-radius: 24px 24px 24px 0px;
}
</style>
