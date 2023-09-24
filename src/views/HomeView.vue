<script setup>

</script>

<template>
  <div id="template">
    <h1>
      Template VueJS
    </h1>
    <h2>
      Version 1.0
    </h2>
  </div>
</template>

<style lang="scss" scoped>
#template {
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
