<template>
  <transition name="section">
    <div class="section-overlay">
      <img src="../assets/img/logo.png" alt="" class="close-button" @click="$emit('close-section')">

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
  name: "Modal",
  data() {
    return {}
  }
}
</script>

<style scoped>
.close-button {
  z-index: 100;
  position: fixed;
  top: 10%;
  right: 7%;
  display: block;
  width: 2em;
  height: 2em;
}

/* オーバーレイデザイン */
.section-overlay {
  z-index: 50;
  position: fixed;
  bottom: 0;
  left: 0;

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
  position: fixed;
  top: 12%;
  overflow-y: scroll;
  overflow-x: hidden;
  transform: translateZ(0);
  width: 90%;
  height: 83%;
  margin: auto;
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