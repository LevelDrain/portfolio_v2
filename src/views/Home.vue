<template>
  <div class="container-fluid">
    <SlideSection v-show="showSection" v-on:close-section="closeSection"/>
    <div class="main-menu">
      <ul>
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

import SlideSection from '@/components/SlideSection.vue'

export default {
  name: 'Home',
  components: {
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
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
  transform: translateZ(0);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /*background: #333333;*/
}
</style>