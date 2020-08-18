<template>
  <transition name="section">
    <div class="section-overlay">
      <div class="section">
        <!-- propsで渡してArticleを切り替えすること -->
        <div v-bind:is="articleID"></div>
        <!-- current^=1 排他的論理和（違う方を返す演算子） -->
        <!-- <button v-on:click="current^=1">toggle</button> -->
      </div>
    </div>
  </transition>
</template>

<script>
import Article1 from "@/components/articles/Article1";
import Article2 from "@/components/articles/Article2";

export default {
  name: "Modal",
  components: {
    'article1': Article1,
    'article2': Article2,
  },
  props: ['articleID'],
  data() {
    return {
      //componentTypes: ['article1', 'article2'],
      //current: 0
    }
  },
  // computed: {
  //   component() {
  //     // 一致しているコンポーネント名を返す
  //     return this.componentTypes[this.current]
  //   }
  // }
}
</script>

<style scoped>
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
  height: 80vh;
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