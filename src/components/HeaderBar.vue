<template>
  <nav class="navbar navbar-expand-md navbar-dark nav-color">
    <router-link class="navbar-brand" to="/">上島研究所</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link tag="li" class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link tag="li" class="nav-link" to="/about">Works</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
.nav-color {
  background: rgba(0, 0, 0, 0.5);
}
</style>