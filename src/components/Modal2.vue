<template>
  <div class="modal" :class="{ 'is-active': isActive }" v-cloak>
    <div class="modal-background"
         @click="close"></div>

    <div class="modal-content animated fadeIn">
      <!-- 内容の本体 -->
      <slot :isActive="isActive"/>
    </div>

    <label v-if="closable"
           class="modal-close is-large"
           aria-label="close">
      <input :id="id" class="is-hidden" type="checkbox" :value="isActive" @input="close">
    </label>
  </div>
</template>

<script>
export default {
  props: {
    id: {type: String, default: 'modal'},
    value: {type: Boolean, default: false},
    closable: {type: Boolean, default: true},
  },

  data() {
    return {
      isActive: this.value,
    }
  },

  watch: {
    value(value) {
      this.isActive = value
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
.animated {
  animation-duration: .3s;
}
</style>