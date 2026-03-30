<script lang="ts" setup>
import Footer from '@/components/mobile/Footer.vue'</script>

<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>

</template>

<style lang="less" scoped>

#app {
  margin: 0 auto;
  max-width: 1280px;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-width: 320px;
  min-height: 100vh;
  background-color: var(--body-bgcolor);

  &.container {
    min-height: 10rem;
  }
}

</style>