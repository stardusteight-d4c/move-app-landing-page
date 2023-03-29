<script setup lang="ts">
import { PersonSimpleRun, Rocket, Cards, PlugsConnected } from './atoms/icons'
</script>

<template>
  <section class="bottom-inset-shadow bg-[#121316] py-[100px] w-screen">
    <div
      class="max-w-7xl justify-center flex flex-col-reverse md:flex-row px-4 gap-x-[50px] mx-auto"
    >
      <!-- First Section -->
      <div class="hidden llg:flex flex-col items-center gap-y-[50px]">
        <div class="card bg-wallpaper-1">
          <div class="card-info mt-[100%]">
            <div>
              <h3 class="font-bold text-[22px]">Lac Superieur</h3>
              <span class="text-[#FFFFFF]/40 block font-medium"
                >30 mins ago</span
              >
              <span class="text-[#FFFFFF]/60 block font-semibold"
                >3,054 Steps</span
              >
            </div>
            <div class="flex flex-col">
              <button class="move-button font-semibold uppercase">move</button>
              <span class="text-[#FFFFFF]/60 font-semibold mt-[13px]"
                >3% higher</span
              >
            </div>
          </div>
        </div>
        <div class="card bg-wallpaper-2">
          <div class="card-info mt-[100%]">
            <div>
              <h3 class="font-bold text-[22px]">Lac Superieur</h3>
              <span class="text-[#FFFFFF]/40 block font-medium"
                >30 mins ago</span
              >
              <span class="text-[#FFFFFF]/60 block font-semibold"
                >3,054 Steps</span
              >
            </div>
            <div class="flex flex-col">
              <button class="move-button font-semibold uppercase">move</button>
              <span class="text-[#FFFFFF]/60 font-semibold mt-[13px]"
                >3% higher</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- Second Section -->
      <div class="flex flex-col items-center gap-y-[50px]">
        <div class="card-small">
          <h2
            class="flex items-center font-bold text-[22px] gap-x-[10px] mb-[20px]"
          >
            <PersonSimpleRun width="30" height="30" />Close Your Rings
          </h2>
          <p class="font-medium text-sm w-[260px] mb-[20px]">
            Close your Move ring by hitting your personal goal of active
            calories burned.
          </p>
          <div class="card-info items-center">
            <div>
              <h3 class="font-bold text-[22px]">Lac Superieur</h3>
              <span class="text-[#FFFFFF]/40 block font-medium"
                >30 mins ago</span
              >
              <span class="text-[#FFFFFF]/60 block font-semibold"
                >3,054 Steps</span
              >
            </div>
            <div class="flex flex-col">
              <button class="move-button font-semibold uppercase">move</button>
              <span class="text-[#FFFFFF]/60 font-semibold mt-[13px]"
                >3% higher</span
              >
            </div>
          </div>
        </div>
        <div class="card-info max-w-[300px] items-center">
          <div>
            <h3 class="font-bold text-[22px]">Lac Superieur</h3>
            <span class="text-[#FFFFFF]/40 block font-medium">30 mins ago</span>
            <span class="text-[#FFFFFF]/60 block font-semibold"
              >3,054 Steps</span
            >
          </div>
          <div class="flex flex-col">
            <button class="move-button font-semibold uppercase">move</button>
            <span class="text-[#FFFFFF]/60 font-semibold mt-[13px]"
              >3% higher</span
            >
          </div>
        </div>
        <div class="card bg-wallpaper-3">
          <div class="card-info mt-[100%]">
            <div>
              <h3 class="font-bold text-[22px]">Lac Superieur</h3>
              <span class="text-[#FFFFFF]/40 block font-medium"
                >30 mins ago</span
              >
              <span class="text-[#FFFFFF]/60 block font-semibold"
                >3,054 Steps</span
              >
            </div>
            <div class="flex flex-col">
              <button class="move-button font-semibold uppercase">move</button>
              <span class="text-[#FFFFFF]/60 font-semibold mt-[13px]"
                >3% higher</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- Third Section -->
      <div
        class="max-w-[400px] md:w-[400px] mx-auto md:mx-0 text-center flex flex-col gap-y-[31px]"
      >
        <Rocket class="w-[60px] h-[60px] mx-auto text-[#BB66CC]" />
        <h2 class="font-extrabold text-4xl md:text-[50px] !leading-[1.2]">
          Jumpstart your motivation to high gear
        </h2>
        <p class="text-lg !leading-[1.2]">
          Blood Oxygen app measurements are not intended for medical use,
          including self-diagnosis or consultation with a doctor, and are only
          designed for general fitness and wellness purposes.
        </p>
        <button
          class="button-learn-more mx-auto uppercase text-black font-semibold flex items-center gap-x-4"
        >
          <Cards />learn more
        </button>
        <div
          class="h-0 border-t w-1/2 my-[30px] border-t-[#FFFFFF20] mx-auto"
        />
        <div
          class="shadow-drop max-w-[300px] mx-auto md:max-w-none mb-20 md:mb-0 col-span-1 flex flex-col gap-y-[10px] w-full items-center justify-center bg-[#00000066] rounded-[25px] py-[30px] px-[20px]"
        >
          <PlugsConnected />
          <h4 class="font-bold">Amazing integrations</h4>
          <p class="text-center text-sm font-medium text-white/70">
            Grow your business, reach new audiences, and hit your goals with
            integrations.
          </p>
        </div>
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
.card {
  flex-shrink: 0;
  width: 300px;
  height: 400px;
  display: block;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0px 40px 40px 40px;
}

.card-info {
  box-sizing: border-box;
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  padding-block: 8px;
  padding-inline: 18px;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  background-color: rgba(0, 0, 0, 0.2);
  overflow: visible;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-small {
  box-sizing: border-box;
  flex-shrink: 0;
  width: 300px;
  height: min-content; /* 253px */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0px 0px 0px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0px 40px 80px 0px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 20;
  border-radius: 0px 40px 40px 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.move-button {
  box-sizing: border-box;
  width: 70px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  -webkit-backdrop-filter: blur(0px);
  backdrop-filter: blur(0px);
  overflow: visible;
  padding: 0px 0px 0px 0px;
  align-content: center;
  flex-wrap: wrap;
  gap: 16;
  border-radius: 24px 24px 24px 0px;
  border: 1px solid #ffffff;
}

.button-learn-more {
  flex-shrink: 0;
  width: 220px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  background: linear-gradient(115deg, #b3c4ff 0%, #ff4d4d 100%);
  overflow: visible;
  position: relative;
  padding: 0px 0px 0px 0px;
  align-content: center;
  flex-wrap: wrap;
  gap: 16;
  border-radius: 24px 24px 24px 0px;
}

.shadow-drop {
  -webkit-box-shadow: 0px 8px 14px 0px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 0px 8px 14px 0px rgba(0, 0, 0, 0.61);
  box-shadow: 0px 8px 14px 0px rgba(0, 0, 0, 0.61);
}
</style>
