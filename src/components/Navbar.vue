<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { Stack, SealCheck, Files } from './atoms/icons'
import { Logo } from './integrate'
import anime from 'animejs'
import { navbarStyles as css } from './styles'

const isBlurOn = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleShowBlurOnScroll)
  executeAnimation()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleShowBlurOnScroll)
})

function handleShowBlurOnScroll() {
  if (window.scrollY >= 100) {
    isBlurOn.value = true
  } else if (window.scrollY === 0) {
    isBlurOn.value = false
    executeAnimation()
  } else {
    isBlurOn.value = false
  }
}

function executeAnimation() {
  anime({
    targets: '#nav',
    translateY: [-50, 0],
    duration: 3000,
    easing: 'easeOutExpo',
  })
  anime({
    targets: '.nav-item1',
    translateY: [-50, 0],
    duration: 3000,
    delay: 200,
  })
  anime({
    targets: '.nav-item2',
    translateY: [-50, 0],
    duration: 3000,
    delay: 300,
  })
  anime({
    targets: '.nav-item3',
    translateY: [-50, 0],
    duration: 3000,
    delay: 300,
  })
}
</script>

<template>
  <nav id="nav" :class="css.handleWrapper(isBlurOn)">
    <div :class="css.container">
      <Logo />
      <div :class="css.centerContent">
        <div :class="css.handleItem('nav-item1')">
          <Stack width="30" height="30" />
          <span :class="css.itemTxt">Features</span>
        </div>
        <div :class="css.handleItem('nav-item2')">
          <SealCheck width="30" height="30" />
          <span :class="css.itemTxt">Community</span>
        </div>
        <div :class="css.handleItem('nav-item3')">
          <Files width="30" height="30" />
          <span :class="css.itemTxt">Docs</span>
        </div>
      </div>
      <button :class="css.signInBtn">Sign In</button>
    </div>
  </nav>
</template>
