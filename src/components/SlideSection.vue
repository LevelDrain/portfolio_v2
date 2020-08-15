<template>
  <transition name="section">
    <div class="section">
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
.section {
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.section-enter-active, .section-leave-active {
  transition: opacity .5s;
}

.section-enter, .section-leave-to {
  opacity: 0;
}
</style>