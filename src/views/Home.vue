<template>
  <div class="container">
    <div class="position-relative d-flex justify-content-center">
      <BubbleEffect class="position-absolute w-100"/>
      <SlideSection v-show="showSection" v-on:close-section="closeSection"/>
      <ul class="main-menu">
        <li>スキル</li>
        <li>プロフ</li>
        <li>成果物</li>
        <li>プロフ</li>
        <li>成果物</li>
        <li>プロフ</li>
        <li>成果物</li>
        <li>プロフ</li>
        <li>成果物</li>
        <li>プロフ</li>
        <li>成果物</li>
        <li>プロフ</li>
        <li>成果物</li>
        <li>プロフ</li>
        <li>成果物</li>
        <li>プロフ</li>
        <li>成果物</li>
        <li>プロフ</li>
        <li>成果物</li>
        <li>プロフ</li>
        <li>成果物</li>
        <li>プロフ</li>
        <li>成果物</li>
        <li>プロフ</li>
        <li>成果物</li>
        <li>プロフ</li>
        <li>成果物</li>
        <li>プロフ</li>
        <li>成果物</li>
        <li>プロフ</li>
        <li>成果物</li>
        <li>プロフ</li>
        <li @click="openSection">成果物</li>
      </ul>
    </div>
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
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 5%;
  padding: 2% 5%;
}
</style>