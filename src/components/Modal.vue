<template>
  <div class="container">
    <transition>
      <div class="overlay" @click="closeEvent">
        <div class="content">
          <p>
            <!--ここに入る-->
            <slot/>
          </p>
          <p>
            <button @click="closeEvent">おかたづけ</button>
          </p>
        </div>
      </div>
    </transition>
  </div>
  <!-- https://reffect.co.jp/vue/understand-component-by-moda-window#i-3 -->
</template>

<script>
export default {
  name: "Modal",
  methods: {
    closeEvent() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.content {
  width: 50%;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>