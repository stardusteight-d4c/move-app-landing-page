<script setup lang="ts"></script>

<template>
  <section class="bg-hero bg-cover w-screen h-screen overflow-hidden">
    <nav
      class="max-w-7xl pt-7 2xl:pt-[48px] pb-8 mx-auto flex items-center justify-between"
    >
      <div class="logo">
        <img src="./assets/hourglass.svg" width="32" height="32" />
      </div>
      <div class="flex items-center gap-x-20">
        <div class="flex items-center gap-x-[10px] cursor-pointer">
          <img src="./assets/stack.svg" width="30" height="30" />
          <span class="uppercase font-bold !leading-[1.2]">Features</span>
        </div>
        <div class="flex items-center gap-x-[10px] cursor-pointer">
          <img src="./assets/seal-check.svg" width="30" height="30" />
          <span class="uppercase font-bold !leading-[1.2]">Community</span>
        </div>
        <div class="flex items-center gap-x-[10px] cursor-pointer">
          <img src="./assets/files.svg" width="30" height="30" />
          <span class="uppercase font-bold !leading-[1.2]">Docs</span>
        </div>
      </div>
      <button
        class="button-default whitespace-nowrap uppercase font-bold hover:text-[#121316] hover:bg-white hover:scale-105 active:scale-100 transition-all duration-300 ease-in"
      >
        Sign In
      </button>
    </nav>
    <div class="max-w-7xl mx-auto">
      <div class="w-[500px] my-auto">
        <span class="columns gap-x-[10px] whitespace-nowrap mb-4 2xl:mb-[30px]"
          >Updated for iOS 16
          <img src="./assets/arrow-right.svg" width="16" height="16"
        /></span>
        <h1 class="font-extrabold text-6xl !leading-[1.2] mb-4 2xl:mb-[30px]">
          Meet Move <br />
          The best app <br />
          for active people
        </h1>
        <p class="text-lg !leading-[1.2] mb-[30px]">
          Blood Oxygen app measurements are not intended for medical use,
          including self-diagnosis or consultation with a doctor, and are only
          designed for general fitness and wellness purposes.
        </p>
        <div class="flex items-center gap-x-5">
          <button class="button-gradient text-black font-semibold">
            <img src="./assets/app-window.svg" class="mr-4" /> Get the App
          </button>
          <button class="button-blur text-white font-semibold">
            <img src="./assets/play.svg" class="mr-4" /> Watch video
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ff75a1 0%, rgb(26, 64, 255) 100%);
  position: relative;
  border-radius: 18px;
  border: 2px solid rgba(255, 255, 255, 0.5);
}

.columns {
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 16px 4px 16px;
  background-color: rgba(255, 255, 255, 0.1);
  overflow: visible;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 10;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
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
