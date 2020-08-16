<template>
  <div class="container-fluid full-page-scroll">
    <section class="section">
      <ul>
        <li @click="openSection">
          <router-link :to="'#MainSection'">
            プロフ
          </router-link>
        </li>
        <li>成果物</li>
        <li>プロフ</li>
        <li>成果物</li>
      </ul>
    </section>
    <section id="MainSection" class="section">
      <SlideSection v-show="showSection" v-on:close-section="closeSection"/>
    </section>
  </div>
</template>

<script>

import SlideSection from '@/components/SlideSection.vue'

export default {
  name: 'Home',
  components: {
    SlideSection
  },
  data() {
    return {
      showSection: false,
    }
  },
  methods: {
    openSection() {
      this.showSection = true
    },
    closeSection() {
      this.showSection = false
    }
  }
}
</script>

<style scoped>
.full-page-scroll {
  width: 100%;
  height: 100vh;
  /*scroll-snap-type: y mandatory;*/
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.section {
  width: 100%;
  height: 100vh;
  padding: 10%;
  /*scroll-snap-align: start;*/
}
</style>