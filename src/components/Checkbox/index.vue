<template>
  <div
    class="Checkbox"
    :class="{ checked: modelValue }"
    @click="$emit('update:modelValue', !modelValue)"
  >
    <input type="checkbox" :checked="modelValue" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Checkbox } from '../types';

export default defineComponent({
  props: {
    modelValue: {
      type: Boolean as PropType<Checkbox['modelValue']>,
    },
  },
  emits: ['update:modelValue'],
});
</script>

<style lang="scss" scoped>
.Checkbox {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid white;
  cursor: pointer;
  transition: 0.3s;
  &.checked {
    background-color: #fff;
  }
  input {
    opacity: 0;
    pointer-events: none;
  }
}
</style>
