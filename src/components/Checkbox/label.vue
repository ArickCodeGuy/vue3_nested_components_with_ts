<template>
  <div
    class="CheckboxLabel"
    @click="localCheckbox.modelValue = !localCheckbox.modelValue"
  >
    <checkbox v-bind="checkbox" />
    {{ label }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { CheckboxLabel } from '../types';

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
  setup(props, { emit }) {
    const localCheckbox = computed({
      get: () => props.checkbox,
      set(v) {
        emit('update:checkbox', v);
      },
    });

    return {
      localCheckbox,
    };
  },
});
</script>

<style lang="scss" scoped>
.CheckboxLabel {
  display: flex;
  gap: 8px;
  cursor: pointer;
}
</style>
