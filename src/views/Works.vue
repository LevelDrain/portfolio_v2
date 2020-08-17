<template>
  <div class="container-fluid">
    <div class="main-menu">
      <div class="main-menu-inner">
        <h2>準備中</h2>
        <p><a href="https://leveldrain.sumomo.ne.jp/Portfolio/works/" target="_blank">☞ 過去作品はこちらからどうぞ</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Works',
  components: {},
  created() {
    if (this.$route.path === '/works') {
      this.$store.state.inWork = false
      this.$store.state.inHome = true
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
  background: rgba(0, 0, 0, 0.8)
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
