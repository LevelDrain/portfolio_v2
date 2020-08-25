<template>
  <transition name="section">
    <div class="section-overlay" :value="dialog" @click="close" v-cloak>
      <img class="section-parts-l" src="../assets/img/img_sf_parts1.svg" alt="">
      <div class="section">
        <!-- propsで渡してArticleを切り替えすること -->
        <!--        <div class="text-layout" v-bind:is="articleID"></div>-->
        <!-- 内容の本体 -->
        <slot/>
        <button @click="close">閉じる</button>
        <!-- current^=1 排他的論理和（違う方を返す演算子） -->
        <!-- メモ：<button v-on:click="current^=1">toggle</button> -->
      </div>
      <img class="section-parts-r" src="../assets/img/img_sf_parts1.svg" alt="">
    </div>
  </transition>
</template>

<script>
export default {
  model: {
    prop: 'dialog',
    event: 'change-dialog',
  },
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    id: String,
  },
  methods: {
    close() {
      //親側の変数をリセット
      this.$emit('change-dialog', false)
      //https://qiita.com/romukey/items/ebd447f769cd9ad1352c
    }
  },
}
</script>

<style scoped>
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

/* SFっぽい装飾 */
.section-parts-l {
  z-index: 60;
  position: fixed;
  top: 10%;
  left: 3%;
  width: 4em;
}

.section-parts-r {
  z-index: 60;
  position: fixed;
  bottom: 10%;
  right: 3%;
  width: 4em;
  transform: scale(-1, -1);
}

@media all and (min-width: 768px) {
  .section-parts-l {
    width: 8em;
  }

  .section-parts-r {
    width: 8em;
  }
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
  background: rgba(13, 40, 46, .9);
  border: 2px solid rgba(110, 201, 232, .6);
  box-shadow: 0px 0px 8px 3px #6ec9e8 inset;
}

/* スクロールバーの横幅指定 */
.section::-webkit-scrollbar {
  width: .3em;
}

/* スクロールバーの背景色 */
.section::-webkit-scrollbar-track {
  background: #2b4c5a;
}

/* スクロールバーの色 */
.section::-webkit-scrollbar-thumb {
  background: #6ec9e8;
}

.section-enter-active, .section-leave-active {
  transition: opacity .5s;
}

.section-enter, .section-leave-to {
  opacity: 0;
}
</style>