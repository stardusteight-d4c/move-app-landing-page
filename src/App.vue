<script setup lang="ts"></script>

<template>
  <section
    class="bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop relative bg-100% xl:bg-cover w-screen h-screen max-h-screen overflow-hidden"
  >
    <nav
      class="max-w-7xl mx-4 md:mx-10 absolute inset-x-0 top-0 pt-4 md:pt-7 2xl:pt-[48px] pb-8 xl:mx-auto flex items-center justify-between"
    >
      <div class="logo">
        <img src="./assets/hourglass.svg" width="32" height="32" />
      </div>
      <div class="hidden md:flex items-center gap-x-20">
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
        class="button-default text-sm md:text-base whitespace-nowrap uppercase font-bold hover:text-[#121316] hover:bg-white hover:scale-105 active:scale-100 transition-all duration-300 ease-in"
      >
        Sign In
      </button>
    </nav>
    <div
      class="max-w-7xl mx-4 md:mx-10 md:mt-8 xl:mx-auto h-full flex flex-col justify-around"
    >
    
      <div class="md:w-[500px] h-fit">
        <span
          class="updated-span text-sm md:text-base cursor-pointer gax-x-[4px] md:gap-x-[8px] whitespace-nowrap mb-4 2xl:mb-[30px]"
          >Updated for iOS 16
          <img
            src="./assets/arrow-right.svg"
            width="16"
            height="16"
            class="arrow-right"
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
  overflow: visible;
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

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
