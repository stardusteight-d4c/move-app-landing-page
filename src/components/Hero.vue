<script setup lang="ts">
import { onMounted } from 'vue'
import { Navbar } from '.'
import { ArrowRight, AppWindow, Play } from './atoms/icons'
import anime from 'animejs'
import { heroStyles as css } from './styles'

onMounted(() => {
  executeAnimation()
})

function executeAnimation() {
  anime({
    targets: '#text',
    opacity: [0, 1],
    translateX: [-150, 0],
    duration: 3000,
    easing: 'easeOutExpo',
  })
  anime({
    targets: '#background',
    opacity: [0, 1],
    translateX: [100, 0],
    duration: 3000,
    easing: 'easeOutExpo',
  })
}
</script>

<template>
  <section :class="css.wrapper">
    <div id="background" :class="css.background" />
    <Navbar />
    <div id="text" :class="css.container">
      <div :class="css.contentContainer">
        <span :class="css.updatedSpan"
          >Updated for iOS 16 <ArrowRight :class="css.arrowRightAnimation"
        /></span>
        <h1 :class="css.headingOne">
          Meet Move <br />
          The best app <br />
          for active people
        </h1>
        <p :class="css.paragraph">
          Blood Oxygen app measurements are not intended for medical use,
          including self-diagnosis or consultation with a doctor, and are only
          designed for general fitness and wellness purposes.
        </p>
        <div :class="css.buttonsContainer">
          <button :class="css.buttonGradient">
            <AppWindow :class="css.handleButtonIcon('text-[#000000]')" /> Get
            the App
          </button>
          <button :class="css.buttonBlur">
            <Play :class="css.handleButtonIcon('text-[#FF88AA]')" /> Watch video
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
