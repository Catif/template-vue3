<script setup>
import { provide } from 'vue'
import { RouterView } from 'vue-router'
import mitt from 'mitt'

const bus = mitt()

provide('bus', bus)
</script>

<template>
  <article>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </article>
</template>

<style lang="scss">
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/basic.scss";

/* Animation de transition de page */
@import "@/assets/scss/animation/fade.scss";

/* template */
section {
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
    opacity: 0.6;
  }
}
</style>
