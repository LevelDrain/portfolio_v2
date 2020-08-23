<template>
  <div class="modal" v-show="value" v-cloak>
    <div class="modal-background"
         @click="close"></div>

    <div class="modal-content animated fadeIn">
      <!-- 内容の本体 -->
      <slot/>
    </div>

    <input class="is-hidden" type="checkbox" :value="value" @input="close">
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    id: String
  },
  watch: {
    value() {
      this.isActive = this.value
      console.log(this.value)
    }
  },
  methods: {
    close() {
      this.isActive = !this.isActive
      this.$emit('input', false)
    }
  },
}
</script>

<style scoped>
.modal {
  background: #333333;
}

.animated {
  animation-duration: .3s;
}
</style>