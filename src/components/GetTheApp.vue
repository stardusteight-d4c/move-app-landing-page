<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MinimalistB from './integrate/MinimalistB.vue'
import { Medal, AppWindow } from './atoms/icons'
import anime from 'animejs'
import { getTheAppStyles as css } from './styles'

const sectionEl = ref()
const firstContent = ref()
const secondContent = ref()
const boxes = [sectionEl, firstContent, secondContent]

onMounted(() => {
  handleObserver()
})

function handleObserver() {
  boxes.forEach((box) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'get-the-app') {
            anime({
              targets: `#${entry.target.id}`,
              opacity: [0, 1],
              translateY: [100, 0],
              duration: 5000,
            })
          } else if (entry.target.id === 'first-content-get-the-app') {
            anime({
              targets: `#${entry.target.id}`,
              translateX: [-100, 0],
              duration: 5000,
            })
          } else if (entry.target.id === 'second-content-get-the-app') {
            anime({
              targets: `#${entry.target.id}`,
              translateX: [100, 0],
              duration: 5000,
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
  <section id="get-the-app" ref="sectionEl" :class="css.wrapper">
    <div :class="css.container">
      <div
        id="first-content-get-the-app"
        ref="firstContent"
        :class="css.firstContent.wrapper"
      >
        <div :class="css.firstContent.container">
          <MinimalistB />
          <div :class="css.firstContent.cardContainer">
            <div :class="css.firstContent.cardContent">
              <div :class="css.firstContent.spanFlexContainer">
                <span :class="css.firstContent.cardSpan">light</span>
                <span :class="css.firstContent.cardSpan">tracking</span>
              </div>
              <span :class="css.firstContent.priceSpan">$95</span>
            </div>
            <h3 :class="css.firstContent.heading3">Super Shoes</h3>
          </div>
          <div :class="css.firstContent.circleContainer">
            <div
              :class="
                css.firstContent.handleCircles({
                  circleCSS: 'circle1-get-the-app',
                  index: 'z-40',
                })
              "
            />
            <div
              :class="
                css.firstContent.handleCircles({
                  circleCSS: 'circle2-get-the-app',
                  index: 'z-30',
                })
              "
            />
            <div
              :class="
                css.firstContent.handleCircles({
                  circleCSS: 'circle3-get-the-app',
                  index: 'z-20',
                })
              "
            />
            <div :class="css.firstContent.round" />
          </div>
        </div>
      </div>
      <div
        id="second-content-get-the-app"
        ref="secondContent"
        :class="css.secondContent.wrapper"
      >
        <Medal :class="css.secondContent.medalIcon" />
        <h2 :class="css.secondContent.heading2">
          Get the motivation you need every day.
        </h2>
        <p :class="css.secondContent.text">
          Apple Watch doesn’t just show you how you’re doing, it gives you
          personalized suggestions and encouragement to close your rings.
        </p>
        <button :class="css.secondContent.gradientBtn">
          <AppWindow /> Get the App
        </button>
      </div>
    </div>
  </section>
</template>
