<template>
  <div
    class="CheckboxLabel"
    @click="$emit('update:checkbox', !checkbox.modelValue)"
  >
    <checkbox v-bind="checkbox" @click.prevent />
    {{ label }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CheckboxLabel } from './types';

export default defineComponent({
  props: {
    checkbox: {
      type: Object as PropType<CheckboxLabel['checkbox']>,
      default: () => ({}),
    },
    label: {
      type: String,
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.CheckboxLabel {
  display: flex;
  gap: 8px;
  cursor: pointer;
}
</style>
