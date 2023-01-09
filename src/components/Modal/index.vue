<template>
  <Teleport to="#modal-target">
    <div class="Modal" v-if="modelValue">
      <div class="Modal__content">
        <button @click="$emit('update:modelValue', false)">hide modal</button>
        <br />
        <br />
        <slot></slot>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean,
    },
  },
});
</script>

<style lang="scss" scoped>
.Modal {
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  &__content {
    width: 400px;
    height: 400px;
    border-radius: 20px;
    padding: 10px;
    background-color: #fff;
    overflow-y: scroll;
  }
}
</style>
