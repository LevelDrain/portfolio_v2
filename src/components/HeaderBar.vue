<template>
  <nav class="navbar navbar-dark nav-color">
    <router-link class="navbar-brand ml-2" to="/">上島研究所</router-link>

    <div class="d-flex">
      <ul class="navbar-nav mr-auto d-flex flex-row">
        <router-link tag="li" class="nav-link nav-item mr-2 font-size" to="/">Home</router-link>
        <router-link tag="li" class="nav-link nav-item mr-2 font-size" to="/works">Works</router-link>
      </ul>
      <img src="../assets/img/logo.png" alt="" v-show="this.$store.state.showSection" @click="close"
           class="close-button">
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  methods: {
    close() {
      this.$store.commit('closeSection')
    }
  }
}
</script>

<style scoped>
.nav-color {
  background: rgba(0, 0, 0, .7);
}

.font-size {
  opacity: .5;
}

.close-button {
  z-index: 100;
  display: block;
  width: 2em;
  height: 2em;
  margin: auto 1em;
}

.navbar {
  padding: .5rem 1rem;
}

@media all and (min-width: 768px) {
  .navbar {
    padding: .5rem 8rem;
  }
}
</style>