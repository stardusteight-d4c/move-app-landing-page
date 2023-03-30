<script setup lang="ts">
import { onMounted, ref } from 'vue'
import DonutChart from './integrate/DonutChart.vue'
import {
  Target,
  Download,
  PlugsConnected,
  PersonSimpleWalk,
} from './atoms/icons'
import { undrawCollaborators } from '@/assets'
import anime from 'animejs'
import { whyUseStyles as css } from './styles'

const sectionEl = ref()
const workoutCard = ref()
const cardsContainerWhyUseEl = ref()
const percentage = ref(0)
const boxes = [sectionEl, workoutCard, cardsContainerWhyUseEl]

onMounted(() => {
  handleObserver()
})

function handleObserver() {
  boxes.forEach((box) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'why-use') {
            anime({
              targets: `#${entry.target.id}`,
              opacity: [0, 1],
              translateY: [100, 0],
              duration: 5000,
            })
          } else if (entry.target.id === 'cardsContainerWhyUse') {
            const items = document.querySelectorAll('.card-animate-why-use')
            anime({
              targets: items,
              opacity: [0, 1],
              duration: 2000,
              easing: 'easeOutSine',
              delay: anime.stagger(500, { start: 0 }),
            })
          } else if (entry.target.id === 'workout-card') {
            anime({
              targets: percentage,
              value: 101,
              round: 1,
              easing: 'linear',
              duration: 5000,
            })
          }
        } else {
          percentage.value = 0
        }
      })
    })
    observer.observe(box.value)
    return () => observer.disconnect()
  })
}
</script>

<template>
  <section ref="sectionEl" id="why-use" :class="css.wrapper">
    <div
      ref="cardsContainerWhyUseEl"
      id="cardsContainerWhyUse"
      :class="css.container"
    >
      <div :class="css.firstSection.container">
        <Target :class="css.firstSection.targetIcon" />
        <h2 :class="css.firstSection.heading2">Why you should use this app</h2>
        <p :class="css.firstSection.paragraph">
          Blood Oxygen app measurements are not intended for medical use,
          including self-diagnosis or consultation with a doctor, and are only
          designed for general fitness and wellness purposes.
        </p>
        <button :class="css.firstSection.donwloadBtn">
          <Download />Download
        </button>
        <div :class="css.firstSection.divider" />
        <div :class="css.firstSection.darkCard">
          <PlugsConnected />
          <h4 :class="css.firstSection.heading4">Amazing integrations</h4>
          <p :class="css.firstSection.text">
            Grow your business, reach new audiences, and hit your goals with
            integrations.
          </p>
        </div>
      </div>
      <div
        id="workout-card"
        ref="workoutCard"
        :class="css.secondSection.container"
      >
        <div :class="css.secondSection.cardWorkout">
          <h3 :class="css.secondSection.heading">Get maximum workout</h3>
          <span :class="css.secondSection.spanWorkout">Swimming</span>
          <DonutChart :percentage="percentage" />
          <p :class="css.secondSection.paragraphWorkout">
            Burn calories the easy way and get tracking
          </p>
        </div>
        <div :class="css.secondSection.blurCard">
          <h4 :class="css.secondSection.heading">Sit less. You’ll go far.</h4>
          <img
            :src="undrawCollaborators"
            alt="collaborators-flat/svg"
            class="my-4"
          />
          <div :class="css.secondSection.spansContainer">
            <span :class="css.secondSection.span">light</span>
            <span :class="css.secondSection.span">tracking</span>
          </div>
          <p :class="css.secondSection.text">
            Replace your regular desk at work with a standing desk to reduce the
            amount of sedentary time in your day. Standing up means you’re
            likely to move around and burn more calories.
          </p>
        </div>
      </div>
      <div :class="css.thirdSection.container">
        <h3 :class="css.thirdSection.heading3">
          <PersonSimpleWalk width="30" height="30" />Activity
        </h3>
        <span :class="css.thirdSection.span">3,054 Steps</span>
        <p :class="css.thirdSection.paragraph">
          Blood Oxygen app measurements are not intended for medical use,
          including self-diagnosis or consultation with a doctor, and are only
          designed for general fitness and wellness purposes.
        </p>
        <div :class="css.thirdSection.imageContainer">
          <div :class="css.thirdSection.womanAvatar" />
          <div :class="css.thirdSection.menAvatar" />
        </div>
      </div>
    </div>
  </section>
</template>
