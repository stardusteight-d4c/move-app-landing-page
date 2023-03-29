<script setup lang="ts">
import MinimalistB from './integrate/MinimalistB.vue'
import { medal, appWindow } from '../assets'
</script>

<template>
  <section class="top-inset-shadow bg-[#121316] py-[100px] w-screen">
    <div class="flex flex-col-reverse lg:flex-row items-center justify-center px-4 gap-y-20 lg:gap-y-0 gap-x-[134px]">
      <div class="sm:w-[565px] sm:h-[620px]">
        <div class="relative w-fit h-fit">
          <MinimalistB />
          <div class="card-big hidden sm:flex z-50 -bottom-16 -right-[300px]">
            <div class="background-image">
              <div
                class="flex items-center gap-x-[10px] absolute bottom-4 left-4"
              >
                <span
                  class="span-glassmorphism cursor-default uppercase font-semibold"
                  >light</span
                >
                <span
                  class="span-glassmorphism cursor-default uppercase font-semibold"
                  >tracking</span
                >
              </div>
              <span class="span-price absolute -bottom-5 right-4">$95</span>
            </div>
            <h3 class="font-bold text-[22px] mt-[20px] ml-4">Super Shoes</h3>
          </div>
          <div class="relative mt-28 ml-28 hidden sm:flex items-center justify-center">
            <div class="circle1 absolute z-40" />
            <div class="circle2 absolute z-30" />
            <div class="circle3 absolute z-20" />
            <div class="round absolute" />
          </div>
        </div>
      </div>
      <div class="w-[500px] lg:w-[400px] flex flex-col gap-y-[31px]">
        <img :src="medal" width="60" height="60" alt="" />
        <h2 class="text-4xl md:text-[50px] font-extrabold !leading-[1.2]">
          Get the motivation you need every day.
        </h2>
        <p class="text-lg">
          Apple Watch doesn’t just show you how you’re doing, it gives you
          personalized suggestions and encouragement to close your rings.
        </p>
        <button class="button-gradient text-black font-semibold">
          <img :src="appWindow" class="mr-4" /> Get the App
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.top-inset-shadow {
  -webkit-box-shadow: inset 0px 7px 6px 0px rgba(0, 0, 0, 0.88);
  -moz-box-shadow: inset 0px 7px 6px 0px rgba(0, 0, 0, 0.88);
  box-shadow: inset 0px 7px 6px 0px rgba(0, 0, 0, 0.88);
}
.circle1 {
  box-sizing: border-box;
  flex-shrink: 0;
  width: 154px;
  height: 154px;
  display: block;
  background: linear-gradient(135deg, #fc7272 0%, #df1515 100%);
  overflow: visible;
  border-radius: 500px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.circle2 {
  box-sizing: border-box;
  flex-shrink: 0;
  width: 228px;
  height: 228px;
  display: block;
  background: linear-gradient(
    135deg,
    rgba(255, 117, 161, 0.19) 0%,
    rgba(26, 64, 255, 0.27) 100%
  );
  overflow: visible;
  border-radius: 500px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.circle3 {
  box-sizing: border-box;
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  display: block;
  background: linear-gradient(
    135deg,
    rgba(255, 117, 161, 0.19) 0%,
    rgba(26, 64, 255, 0.27) 100%
  );
  overflow: visible;
  border-radius: 500px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.round {
  box-sizing: border-box;
  flex-shrink: 0;
  width: 374px;
  height: 374px;
  display: block;
  -webkit-filter: blur(0px);
  filter: blur(0px);
  overflow: visible;
  border-radius: 500px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card-big {
  box-sizing: border-box;
  width: 360px;
  height: min-content;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px 10px 20px 10px;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  flex-wrap: nowrap;
  gap: 20;
  position: absolute;
  border-radius: 50px 50px 0px 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.background-image {
  flex-shrink: 0;
  width: 100%;
  height: 188px;
  display: block;
  box-shadow: 0px 0.6032302072222955px 0px -0.41666666666666663px rgba(0, 0, 0, 0.07),
    0px 2.290210571630906px 0px -0.8333333333333333px rgba(0, 0, 0, 0.09113),
    0px 10px 0px -1.25px rgba(0, 0, 0, 0.1875);
  position: relative;
  background-image: url('/pink-wallpaper.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 40px;
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

.span-price {
  box-sizing: border-box;
  width: min-content; /* 61px */
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 16px 8px 16px;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  background-color: rgba(255, 255, 255, 0.3);
  overflow: visible;
  align-content: center;
  flex-wrap: nowrap;
  gap: 10;
  position: absolute;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
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
</style>
