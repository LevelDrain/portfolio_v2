<template>
  <div class="container-fluid">
    <div class="main-menu">
      <Modal2 :value="articleShow">
        <p>中身</p>
        <div class="main-menu-inner">
          <h2>準備中</h2>
          <p><a href="https://leveldrain.sumomo.ne.jp/Portfolio/works/" target="_blank">☞ 過去作品はこちらからどうぞ</a></p>
        </div>
      </Modal2>
    </div>
    <p @click="open">おすべし</p>
    <p @click="open">おすべし</p>
    <p @click="open">おすべし</p>
    <p @click="open">おすべし</p>
    <p @click="open">おすべし</p>
    <p @click="open">おすべし</p>
    <p @click="open">おすべし</p>
    <p @click="open">おすべし</p>
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
      articleShow: false
    }
  },
  created() {
    if (this.$route.path === '/works') {
      this.$store.state.inWork = false
      this.$store.state.inHome = true
    }
  },
  methods:{
    open(){
      this.articleShow=true
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
