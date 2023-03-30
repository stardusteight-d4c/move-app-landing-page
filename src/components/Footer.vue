<script setup lang="ts">
import { onMounted } from 'vue'
import { designCode } from '../assets/'
import {
  Stack,
  SealCheck,
  Files,
  Envelope,
  Info,
  List,
  Discord,
  Youtube,
  Instagram,
  Pen,
} from './atoms/icons'
import anime from 'animejs'
import { footerStyles as css } from './styles'

onMounted(() => {
  handleObserver()
})

function handleObserver() {
  const box = document.querySelector('#footer')!
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        executeAnimation()
      }
    })
  })
  observer.observe(box)
  return () => observer.disconnect()
}

function executeAnimation() {
  anime({
    targets: '#footer',
    opacity: [0, 1],
    translateX: [-300, 0],
    duration: 5000,
    easing: 'easeOutExpo',
  })
}
</script>

<template>
  <footer id="footer" :class="css.wrapper">
    <div :class="css.contentContainer">
      <img :src="designCode" :class="css.authorImage" />
      <div :class="css.itemsWrapper">
        <div :class="css.itemsContainer">
          <ul :class="css.unorderedList">
            <li :class="css.listItem">
              <Stack width="30" height="30" />Features
            </li>
            <li :class="css.listItem">
              <SealCheck width="30" height="30" />Community
            </li>

            <li :class="css.listItem"><Files width="30" height="30" />Docs</li>
          </ul>
          <ul class="flex flex-col gap-y-[17px]">
            <li :class="css.listItem">
              <Envelope width="30" height="30" />Contact
            </li>
            <li :class="css.listItem">
              <Info width="30" height="30" />About us
            </li>
            <li :class="css.listItem">
              <List width="30" height="30" />We hire
            </li>
          </ul>
          <ul class="flex flex-col gap-y-[17px]">
            <li :class="css.listItem">
              <Discord width="30" height="30" />Discord
            </li>
            <li :class="css.listItem">
              <Youtube width="30" height="30" />Youtube
            </li>
            <li :class="css.listItem">
              <Instagram width="30" height="30" />Instagram
            </li>
          </ul>
        </div>

        <form :class="css.formContainer">
          <Pen />
          <span :class="css.formSubscribeSpan"
            >subscribe to the newsletter</span
          >
          <div :class="css.inputBtnContainer">
            <input
              type="email"
              placeholder="email@framer.com"
              :class="css.input"
            />
            <button :class="css.btn">Sign Up</button>
          </div>
          <span :class="css.spanSpam">No spam ever.</span>
        </form>
      </div>
      <div :class="css.divider" />
      <div :class="css.copyrightContainer">
        <span :class="css.spanCopy"
          >Copyright © 2022 - {{ new Date().getFullYear() }} DesignCode &
          Stardusteight</span
        >
        <a href="#" :class="css.link">Terms</a>
        <a href="#" :class="css.link">Privacy Policy</a>
      </div>
    </div>
  </footer>
</template>
