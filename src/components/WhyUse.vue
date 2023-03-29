<script setup lang="ts">
import DonutChart from './integrate/DonutChart.vue'
import {
  target,
  download,
  plugsConnected,
  undrawCollaborators,
  personSimpleWalk,
} from '../assets'
</script>

<template>
  <section class="bg-wallpaper-2 bg-cover py-[100px] w-screen">
    <div
      class="max-w-7xl px-4 mx-auto flex flex-col md:flex-row items-center justify-center gap-x-[50px] llg:gap-x-[18px] xl:gap-x-[50px]"
    >
      <div
        class="w-full max-w-[400px] flex flex-col items-center gap-y-[31px] text-center"
      >
        <img
          :src="target"
          alt="target/icon"
          width="60"
          height="60"
          class="mx-auto"
        />
        <h2 class="font-extrabold text-4xl md:text-[50px] !leading-[1.2]">
          Why you should use this app
        </h2>
        <p class="text-lg !leading-[1.2]">
          Blood Oxygen app measurements are not intended for medical use,
          including self-diagnosis or consultation with a doctor, and are only
          designed for general fitness and wellness purposes.
        </p>
        <button
          class="download-button text-black font-semibold uppercase gap-x-4"
        >
          <img :src="download" alt="" />Download
        </button>
        <div
          class="h-0 border-t w-1/2 my-[30px] border-t-[#FFFFFF20] mx-auto"
        />
        <div
          class="shadow-drop max-w-[300px] mx-auto md:max-w-none mb-20 md:mb-0 col-span-1 flex flex-col gap-y-[10px] w-full items-center justify-center bg-[#00000066] rounded-[25px] py-[30px] px-[20px]"
        >
          <img :src="plugsConnected" alt="" />
          <h4 class="font-bold">Amazing integrations</h4>
          <p class="text-center text-sm font-medium text-white/70">
            Grow your business, reach new audiences, and hit your goals with
            integrations.
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center gap-y-[50px]">
        <div class="card-workout">
          <h3 class="text-[22px] font-bold">Get maximum workout</h3>
          <span class="font-medium tracking-wider text-lg">Swimming</span>
          <DonutChart :percentage="75" />
          <p class="text-[22px] font-bold">
            Burn calories the easy way and get tracking
          </p>
        </div>
        <div class="card-glassmorphism">
          <h4 class="font-bold text-[22px]">Sit less. You’ll go far.</h4>
          <img
            :src="undrawCollaborators"
            alt="collaborators-flat/svg"
            class="my-4"
          />
          <div class="flex items-center gap-x-[10px]">
            <span
              class="span-glassmorphism cursor-default uppercase font-semibold"
              >light</span
            >
            <span
              class="span-glassmorphism cursor-default uppercase font-semibold"
              >tracking</span
            >
          </div>
          <p class="font-medium">
            Replace your regular desk at work with a standing desk to reduce the
            amount of sedentary time in your day. Standing up means you’re
            likely to move around and burn more calories.
          </p>
        </div>
      </div>

      <div  class="white-card hidden llg:flex">
        <h3 class="text-[22px] font-bold flex items-center gap-x-[10px]">
          <img
            width="30"
            height="30"
            :src="personSimpleWalk"
            alt="person-run/svg"
          />Activity
        </h3>
        <span class="font-semibold">3,054 Steps</span>
        <p class="font-medium mx-[20px]">
          Blood Oxygen app measurements are not intended for medical use,
          including self-diagnosis or consultation with a doctor, and are only
          designed for general fitness and wellness purposes.
        </p>
        <div class="image-container">
          <div class="round-user bg-woman bottom-2 left-3 z-10"></div>
          <div class="round-user bg-men bottom-2 left-12 z-0"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.download-button {
  flex-shrink: 0;
  width: 220px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  background: linear-gradient(115deg, #8af2ff 0%, #1fa5ff 100%);
  overflow: visible;
  position: relative;
  padding: 0px 0px 0px 0px;
  align-content: center;
  flex-wrap: wrap;
  gap: 16;
  border-radius: 24px 24px 24px 0px;
}

.card-workout {
  box-sizing: border-box;
  flex-shrink: 0;
  max-width: 360px;
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 30px 30px 30px 30px;
  background-color: #44ccff;
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  border-radius: 30px;
}

.card-glassmorphism {
  box-sizing: border-box;
  flex-shrink: 0;
  max-width: 360px;
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 30px 30px 30px 30px;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  background-color: rgba(0, 0, 0, 0.2);
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 10;
  border-radius: 30px;
}

.span-glassmorphism {
  box-sizing: border-box;
  flex-shrink: 0;
  width: min-content; /* 77px */
  height: min-content; /* 35px */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 16px;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  background-color: rgba(255, 255, 255, 0.2);
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 10;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.white-card {
  box-sizing: border-box;
  flex-shrink: 0;
  color: black;
  width: 360px;
  height: min-content; /* 428px */
  flex-direction: column;
  row-gap: 10px;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 10px 10px 10px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  box-shadow: 0px 1.003989406591571px 1.003989406591571px -0.46875px rgba(0, 0, 0, 0.19),
    0px 2.3905238345817033px 2.3905238345817033px -0.9375px rgba(0, 0, 0, 0.18252),
    0px 4.355593129692087px 4.355593129692087px -1.40625px rgba(0, 0, 0, 0.17843),
    0px 7.2410312951768185px 7.2410312951768185px -1.875px rgba(0, 0, 0, 0.17241),
    0px 11.700295645259382px 11.700295645259382px -2.34375px rgba(0, 0, 0, 0.16312),
    0px 19.140850928010877px 19.140850928010877px -2.8125px rgba(0, 0, 0, 0.14762),
    0px 32.97621127542222px 32.97621127542222px -3.28125px rgba(0, 0, 0, 0.1188),
    0px 60px 60px -3.75px rgba(0, 0, 0, 0.0625);
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 10;
  border-radius: 0px 50px 50px 50px;
}

.image-container {
  width: 100%;
  height: 188px;
  display: block;
  position: relative;
  background-image: url('/3d-room.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 40px;
}

.round-user {
  box-sizing: border-box;
  width: 44px;
  height: 44px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  border-radius: 30px;
  border: 2px solid #ffffff;
}
</style>
