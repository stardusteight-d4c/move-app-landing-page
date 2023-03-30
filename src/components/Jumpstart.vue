<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { JumpstartCardContent } from './integrate'
import anime from 'animejs'
import { PersonSimpleRun, Rocket, Cards, PlugsConnected } from './atoms/icons'
import { jumpstartStyles as css } from './styles'

const sectionEl = ref()
const cardsContainerEl = ref()
const boxes = [sectionEl, cardsContainerEl]

onMounted(() => {
  handleObserver()
})

function handleObserver() {
  boxes.forEach((box) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'jumpstart') {
            anime({
              targets: `#${entry.target.id}`,
              opacity: [0, 1],
              translateY: [200, 0],
              duration: 5000,
            })
          } else if (entry.target.id === 'cardsContainerJumpstart') {
            const items = document.querySelectorAll('.card-animate-jumpstart')
            anime({
              targets: items,
              opacity: [0, 1],
              duration: 2000,
              easing: 'easeOutSine',
              delay: anime.stagger(300, { start: 0 }),
            })
          }
        }
      })
    })
    observer.observe(box.value)
    return () => observer.disconnect()
  })
}
</script>

<template>
  <section id="jumpstart" ref="sectionEl" :class="css.wrapper">
    <div ref="cardsContainerEl" id="cardsContainerJumpstart" :class="css.container">
      <!-- First Section -->
      <div :class="css.firstSectionContainer">
        <div :class="css.handleDefaultCard('bg-wallpaper-1')">
          <div :class="css.defaultCardContent">
            <JumpstartCardContent />
          </div>
        </div>
        <div :class="css.handleDefaultCard('bg-wallpaper-2')">
          <div :class="css.defaultCardContent">
            <JumpstartCardContent />
          </div>
        </div>
      </div>
      <!-- Second Section -->
      <div :class="css.secondSectionContainer">
        <div :class="css.cardSmallJumpstart.wrapper">
          <h2 :class="css.cardSmallJumpstart.heading2">
            <PersonSimpleRun width="30" height="30" />Close Your Rings
          </h2>
          <p :class="css.cardSmallJumpstart.paragraph">
            Close your Move ring by hitting your personal goal of active
            calories burned.
          </p>
          <div :class="css.cardSmallJumpstart.cardInfo">
            <JumpstartCardContent />
          </div>
        </div>
        <div :class="css.cardInfo">
          <JumpstartCardContent />
        </div>
        <div :class="css.handleDefaultCard('bg-wallpaper-3')">
          <div :class="css.defaultCardContent">
            <JumpstartCardContent />
          </div>
        </div>
      </div>
      <!-- Third Section -->
      <div :class="css.thirdSection.wrapper">
        <Rocket :class="css.thirdSection.rocketIcon" />
        <h2 :class="css.thirdSection.heading2">
          Jumpstart your motivation to high gear
        </h2>
        <p :class="css.thirdSection.paragraph">
          Blood Oxygen app measurements are not intended for medical use,
          including self-diagnosis or consultation with a doctor, and are only
          designed for general fitness and wellness purposes.
        </p>
        <button :class="css.thirdSection.learnMoreButton">
          <Cards />learn more
        </button>
        <div :class="css.thirdSection.divider" />
        <div :class="css.thirdSection.darkCard">
          <PlugsConnected />
          <h4 :class="css.thirdSection.heading4">Amazing integrations</h4>
          <p :class="css.thirdSection.text">
            Grow your business, reach new audiences, and hit your goals with
            integrations.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
