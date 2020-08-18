<template>
  <div class="container-fluid">
    <Modal v-show="this.$store.state.showSection" />
    <div class="main-menu">
      <div class="main-menu-inner">
        <p>We might be actually a brain hooked up to a computer program that can perfectly simulate experiences of the
          outside world. </p>

        <ul>
          <li>LEVEL1：スキルについて</li>
          <li>LEVEL2：自己紹介</li>
          <li>LEVEL3：本ポートフォリオについて</li>
          <li @click="open">🌟押すべし🌟</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: 'Home',
  components: {
    Modal,
  },
  data() {
    return {
      showSection: this.$store.state.showSection,
    }
  },
  created() {
    if (this.$route.path === '/') {
      this.$store.state.inWork = true
      this.$store.state.inHome = false
    }
  },
  methods: {
    open() {
      this.$store.commit('openSection')
    },
  }
}
</script>

<style scoped>
.main-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background: #333333;*/
}

.main-menu-inner {
  position: fixed;
  top: 10%;
  overflow-y: auto;
  overflow-x: hidden;
  transform: translateZ(0);

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 85vh;
  /*background: #333333;*/
}

.main-menu-inner li {
  list-style: none;
}

/* メニューの位置調整 */
.main-menu-inner {
  padding: 30% 10%;
}

@media all and (min-width: 768px) {
  .main-menu-inner {
    padding: 10%;
  }
}
</style>