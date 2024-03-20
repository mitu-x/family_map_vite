<script lang="ts" setup>
import Footer from './components/Footer.vue'</script>

<template>
  <div class="container">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<style lang="less" scoped>
.container {
  min-height: 10rem;
}
</style>