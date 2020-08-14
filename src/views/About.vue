<template>
  <div class="container">
    <div class="d-flex justify-content-center pt-5">
      <p>ボタンを押すとモーダルウィンドウが開きます</p>
      <button @click="openModal">開く</button>

      <Modal v-show="showContent" v-on:close-modal="closeModal">
        <p>slotからモーダルへ（挟むと受け渡せる）</p>
        <p>{{ message }}</p>
      </Modal>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: 'About',
  components: {
    Modal
  },
  data() {
    return {
      showContent: false,
      message: 'ここからslotへ転送'
    }
  },
  methods: {
    openModal() {
      this.showContent = true
    },
    closeModal() {
      this.showContent = false
    }
  }
}
</script>

<style>

</style>
