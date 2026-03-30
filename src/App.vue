<script lang="ts" setup>
import MobileLayout from '@/components/mobile/MobileLayout.vue'
import PCLayout from '@/components/pc/PCLayout.vue'
import {isMobileDevice} from "@/utils/deviceDetector.ts";
import {onMounted, ref} from "vue";

const isMobile = ref(true);
onMounted(()=>{
  isMobile.value = isMobileDevice();
})
</script>

<template>
  <MobileLayout v-if="isMobile" />
  <PCLayout v-else />
</template>

<style lang="less">

</style>

