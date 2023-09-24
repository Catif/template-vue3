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

/* temp */
</style>
