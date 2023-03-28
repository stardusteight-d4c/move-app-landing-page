<script setup lang="ts"></script>

<template>
  <section class="bg-[#121316] py-[100px] min-h-screen w-screen">
    <div>
      <div class="card">
        <div class="card-info">
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
      </div>
      <div class="card">
        <div class="card-info">
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
      </div>
      <div></div>
    </div>
    <div></div>
    <div></div>
  </section>
</template>

<style scoped>
.card {
  flex-shrink: 0;
  width: 300px;
  height: 400px;
  display: block;
  overflow: hidden;
  position: relative;
  background-image: url('/test1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0px 40px 40px 40px;
}

.card-info {
  box-sizing: border-box;
  width: 100%;
  margin-top: 100%;
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
</style>
