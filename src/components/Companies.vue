<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Heart, HandHeart, BatteryFull } from './atoms/icons'
import {
  framerLogo,
  appleLogo,
  stripeLogo,
  instagramLogo,
  slackLogo,
} from '@/assets'
import anime from 'animejs'
import { companiesStyles as css } from './styles'

const sectionEl = ref()
const logoCompaniesContainer = ref()
const headingTwo = ref()
const count = ref(0)
const formattedNum = ref(count.value.toLocaleString('pt-BR'))
const boxes = [sectionEl, logoCompaniesContainer, headingTwo]

onMounted(() => {
  handleObserver()
})

function handleObserver() {
  boxes.forEach((box) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'section') {
            anime({
              targets: `#${entry.target.id}`,
              opacity: [0, 1],
              translateY: [100, 0],
              duration: 5000,
            })
          } else if (entry.target.id === 'logo-companies-container') {
            anime({
              targets: `#${entry.target.id}`,
              translateY: [50, 0],
              duration: 3000,
            })
          } else if (entry.target.id === 'heading-two') {
            anime({
              targets: count,
              value: 8000,
              round: 1,
              easing: 'linear',
              duration: 3000,
              update: function () {
                formattedNum.value = count.value.toLocaleString('pt-BR')
              },
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
  <section id="section" ref="sectionEl" :class="css.wrapper">
    <div :class="css.container">
      <div :class="css.headingContainer">
        <h2 ref="headingTwo" id="heading-two" :class="css.heading2">
          Trusted by +{{ formattedNum }} companies worldwide
        </h2>
        <p :class="css.headingParagraph">
          Replace your regular desk at work with a standing desk to reduce the
          amount of sedentary time in your day. Standing up means you’re likely
          to move around and burn more calories.
        </p>
      </div>
      <div
        ref="logoCompaniesContainer"
        id="logo-companies-container"
        :class="css.logoCompaniesContainer"
      >
        <div :class="css.logoCompany">
          <img :src="framerLogo" width="32" height="32" alt="Framer" />
        </div>
        <div :class="css.logoCompany">
          <img :src="appleLogo" width="32" height="32" alt="Apple" />
        </div>
        <div class="logo-company shadow-drop hidden md:flex">
          <img :src="stripeLogo" width="32" height="32" alt="Stripe" />
        </div>
        <div :class="css.logoCompany">
          <img :src="instagramLogo" width="32" height="32" alt="Instagram" />
        </div>
        <div :class="css.logoCompany">
          <img :src="slackLogo" width="32" height="32" alt="Slack" />
        </div>
      </div>
      <div :class="css.divider" />
      <h3 :class="css.heading3">Designed to impress</h3>
      <div :class="css.cardsWrapper">
        <div :class="css.cardContainer">
          <Heart />
          <h4 :class="css.heading4">Quality of life</h4>
          <p :class="css.cardTxt">
            Control the health of your team. Offer rewards and have a more
            motivated team.
          </p>
        </div>
        <div :class="css.cardContainer">
          <HandHeart />
          <h4 :class="css.heading4">More performance</h4>
          <p :class="css.cardTxt">
            A healthier team is a more active, creative and inspiring team for
            your business.
          </p>
        </div>
        <div :class="css.cardContainer">
          <BatteryFull />
          <h4 :class="css.heading4">Full energy</h4>
          <p :class="css.cardTxt">
            Improve teamwork and deliver more results with a team full of
            energy.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
