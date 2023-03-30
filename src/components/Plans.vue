<script setup lang="ts">
import { onMounted, ref } from 'vue'
import FaqItem from './integrate/FaqItem.vue'
import {
  Stack,
  Pen,
  Globe,
  Lock,
  Books,
  Person,
  Info,
  ToggleLeft,
  CreditCard,
  Medal,
} from './atoms/icons'
import anime from 'animejs'
import { plansStyles as css } from './styles'

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
          if (entry.target.id === 'plans') {
            anime({
              targets: `#${entry.target.id}`,
              opacity: [0, 1],
              translateY: [200, 0],
              duration: 5000,
            })
          } else if (entry.target.id === 'cards-container-plans') {
            const items = document.querySelectorAll('.card-animate-plan')
            anime({
              targets: items,
              translateY: [50, 0],
              duration: 2000,
              easing: 'easeOutSine',
              delay: anime.stagger(100, { start: 0 }),
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
  <section id="plans" ref="sectionEl" :class="css.wrapper">
    <div :class="css.headingContainer">
      <h2 :class="css.heading2">Ready to start?</h2>
      <span :class="css.headingSpan"
        >Launch a site for free. Choose a site plan to unlock more
        features.</span
      >
    </div>
    <div :class="css.divider" />
    <div
      ref="cardsContainerEl"
      id="cards-container-plans"
      :class="css.cardsContainer"
    >
      <div :class="css.handleWrapperCard('card1-plans')">
        <div :class="css.card1.container">
          <h3 :class="css.card1.heading3"><Pen />Free plan</h3>
          <h4 :class="css.price">$15/mo</h4>
          <span :class="css.card1.span"
            >Up to 3 projects <Info width="16" height="16"
          /></span>
          <ul :class="css.handleUnorderedList()">
            <li :class="css.listItem">
              <Globe width="24" height="24" /> Custom domain
            </li>
            <li :class="css.listItem">
              <Lock width="24" height="24" /> Password protect
            </li>
            <li :class="css.listItem">
              <Books width="24" height="24" /> 10GB bandwidth
            </li>
            <li :class="css.listItem">
              <Stack width="24" height="24" /> 1,000 CMS items
            </li>
            <li :class="css.listItem">
              <Person width="24" height="24" /> 10,000 visitors
            </li>
          </ul>
          <div :class="css.handleDivider('#000000')" />
          <button :class="css.card1.btn">
            <Pen width="30" height="30" />Try for free
          </button>
        </div>
      </div>
      <div :class="css.handleWrapperCard('card2-plans')">
        <div :class="css.card2.container">
          <span :class="css.card2.blurCapsule"
            ><Medal width="16" height="16" /> Popular</span
          >
          <div :class="css.handleDivider('#FFFFFF')" />
          <h3 :class="css.card2.heading3"><Pen />starter plan</h3>
          <h4 :class="css.price">$30/mo</h4>
          <span :class="css.card2.span"
            >Billed yearly <ToggleLeft width="16" height="16"
          /></span>
          <ul :class="css.handleUnorderedList()">
            <li :class="css.listItem">
              <Globe width="24" height="24" /> Custom domain
            </li>
            <li :class="css.listItem">
              <Lock width="24" height="24" /> Password protect
            </li>
            <li :class="css.listItem">
              <Books width="24" height="24" /> 10GB bandwidth
            </li>
            <li :class="css.listItem">
              <Stack width="24" height="24" /> 1,000 CMS items
            </li>
            <li :class="css.listItem">
              <Person width="24" height="24" /> 10,000 visitors
            </li>
          </ul>
          <div :class="css.handleDivider('#FFFFFF')" />
          <button :class="css.card2.btn"><CreditCard />subscribe</button>
        </div>
      </div>
      <div :class="css.handleWrapperCard('card3-plans')">
        <div :class="css.card3.container">
          <h3 :class="css.card3.heading3"><Pen color="#FFFFFF" />pro plan</h3>
          <h4 :class="css.price">$45/mo</h4>
          <span :class="css.card3.blurCapsule"
            >Billed yearly <ToggleLeft width="16" height="16"
          /></span>
          <ul :class="css.handleUnorderedList('text-white/70')">
            <li :class="css.listItem">
              <Globe width="24" height="24" color="#FFFFFF" /> Custom domain
            </li>
            <li :class="css.listItem">
              <Lock width="24" height="24" color="#FFFFFF" /> Password protect
            </li>
            <li :class="css.listItem">
              <Books width="24" height="24" color="#FFFFFF" /> 10GB bandwidth
            </li>
            <li :class="css.listItem">
              <Stack width="24" height="24" color="#FFFFFF" /> 1,000 CMS items
            </li>
            <li :class="css.listItem">
              <Person width="24" height="24" color="#FFFFFF" /> 10,000 visitors
            </li>
          </ul>
          <div :class="css.handleDivider('#FFFFFF')" />
          <button :class="css.card3.btn"><CreditCard />subscribe</button>
        </div>
      </div>
    </div>
    <div :class="css.divider" />
    <div :class="css.faqWrapper">
      <h2 :class="css.headingFaq">FAQ</h2>
      <div :class="css.faqItemsContainer">
        <FaqItem
          title="How are paid plans billed?"
          info="Paid plans are billed both at a Site and Team level. Both subscriptions
        are always linked to the email of the purchaser. In order to get extra
        features and faster loading time to your site, you can acquire any of
        our site plans. In the moment of purchasing the first site plan within a
        team, a Team account will be added automatically so editors will be
        charged at a team level."
        />
        <FaqItem
          title="How are editors billed?"
          info="Paid plans are billed both at a Site and Team level. Both subscriptions
        are always linked to the email of the purchaser. In order to get extra
        features and faster loading time to your site, you can acquire any of
        our site plans. In the moment of purchasing the first site plan within a
        team, a Team account will be added automatically so editors will be
        charged at a team level."
        />
      </div>
    </div>
  </section>
</template>
