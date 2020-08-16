<template>
  <transition name="section">
    <div class="section-overlay">
      <div class="section">
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <p>hello</p><br>
        <button @click="$emit('close-section')">close</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "SlideSection",
  data() {
    return {}
  }
}
</script>

<style scoped>
/* オーバーレイデザイン */
.section-overlay {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  background: rgba(0, 0, 0, 0.5);
}

/* スクロール有コンテンツ */
.section {
  position: absolute;
  top: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  transform: translateZ(0);
  width: 80%;
  height: 100%;
  margin: 0 auto;
  /*background: #333333;*/
  background-image: url("../assets/img/cyberpankui.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

/* スクロールバーの横幅指定 */
.section::-webkit-scrollbar {
  width: .3em;
}

/* スクロールバーの背景色 */
.section::-webkit-scrollbar-track {
  background: #111111;
}

/* スクロールバーの色 */
.section::-webkit-scrollbar-thumb {
  background: #555555;
}

.section-enter-active, .section-leave-active {
  transition: opacity .5s;
}

.section-enter, .section-leave-to {
  opacity: 0;
}
</style>