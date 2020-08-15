<template>
  <transition name="section">
    <div class="section-wrap">
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
.section-wrap {
  z-index: 50;
  position: fixed;
  bottom: 0;
  left: 0;

  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  background: rgba(0, 0, 0, 0.5);
}

.section {
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  transform: translateZ(0);
  width: 100%;
  height: 100%;
}

.section-enter-active, .section-leave-active {
  transition: opacity .5s;
}

.section-enter, .section-leave-to {
  opacity: 0;
}
</style>