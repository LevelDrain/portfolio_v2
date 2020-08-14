<template>
  <div class="container">
    <div class="position-relative d-flex justify-content-center">
      <BubbleEffect class="position-fixed w-100"/>
      <ul class="main-menu">
        <li>スキル</li>
        <li>プロフ</li>
        <li>成果物</li>
      </ul>
    </div>
  </div>
</template>

<script>

import BubbleEffect from '@/components/Bubble.vue'

export default {
  name: 'Home',
  components: {
    BubbleEffect
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