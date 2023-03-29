<script setup lang="ts"></script>

<template>
  <div class="mx-auto sm:mx-0 w-[265px] h-[320px] relative">
    <i class="frame1" />
    <i class="frame2" />
    <i class="frame3" />
  </div>
</template>

<style scoped>
.frame1 {
  width: 82px;
  height: 320px;
  display: block;
  background: linear-gradient(180deg, #ff75a1 0%, rgb(26, 64, 255) 100%);
  overflow: visible;
  position: absolute;
  border-radius: 0px 0px 0px 60px;
}

.frame2 {
  width: 178px;
  height: 156px;
  display: block;
  background: linear-gradient(180deg, #ffc3df 0%, #ff4c74 100%);
  overflow: visible;
  position: absolute;
  left: 85px;
  border-radius: 0px 60px 0px 0px;
}

.frame3 {
  width: 178px;
  height: 160px;
  display: block;
  background: linear-gradient(180deg, #b28af2 0%, #3b1fa5 100%);
  overflow: visible;
  position: absolute;
  left: 85px;
  bottom: 1px;
  border-radius: 0px 60px 0px 0px;
}
</style>
