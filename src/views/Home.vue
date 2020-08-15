<template>
  <div class="position-relative d-flex justify-content-center">
    <BubbleEffect class="position-fixed w-100"/>
    <SlideSection v-show="showSection" v-on:close-section="closeSection"/>
    <ul class="main-menu">
      <li @click="openSection">スキル</li>
      <li>プロフ</li>
      <li>成果物</li>
    </ul>
  </div>
</template>

<script>

import BubbleEffect from '@/components/Bubble.vue'
import SlideSection from '@/components/SlideSection.vue'

export default {
  name: 'Home',
  components: {
    BubbleEffect,
    SlideSection
  },
  data() {
    return {
      showSection: false
    }
  },
  methods: {
    openSection() {
      this.showSection = true
    },
    closeSection() {
      this.showSection = false
    }
  }
}
</script>

<style scoped>
.main-menu {
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 4.5em;
}
</style>