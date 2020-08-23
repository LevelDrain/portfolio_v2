<template>
  <div class="container-fluid">
    <div class="main-menu">
      <Modal2 :value.sync="showArticle">
        <br><br><br><br><br>
        <p :value.sync="showArticle" :id="id">記事 子コンポーネント</p>
      </Modal2>
      <br><br><br><br><br>
      <button @click="openModal()">開ける</button>
    </div>
  </div>
</template>

<script>
import Modal2 from '@/components/Modal2'

export default {
  name: 'Works',
  components: {
    Modal2
  },
  data() {
    return {
      id: "testId01",
      showArticle: false
    }
  },
  created() {
    if (this.$route.path === '/works') {
      this.$store.state.inWork = false
      this.$store.state.inHome = true
    }
  },
  methods: {
    openModal() {
      this.showArticle = true
    }
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
  /*background: rgba(0, 0, 0, 0.8)*/
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

/* メニューの位置調整 */
.main-menu-inner {
  padding-top: 30%;
  padding-left: 10%;
}

@media all and (min-width: 768px) {
  .main-menu-inner {
    padding-top: 10%;
    padding-left: 10%;
  }
}
</style>
