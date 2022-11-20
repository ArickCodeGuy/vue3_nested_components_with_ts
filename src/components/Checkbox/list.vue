<template>
  <div class="CheckboxList">
    <checkbox-label
      v-for="(checkbox, i) in localCheckboxes"
      v-bind="checkbox"
      class="CheckboxList__item"
      :key="i"
      @update:checkbox="localCheckboxes[i].checkbox.modelValue = $event"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { CheckboxList } from './types';

export default defineComponent({
  props: {
    checkboxes: {
      type: Array as PropType<CheckboxList['checkboxes']>,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const localCheckboxes = computed({
      get: () => props.checkboxes ?? [],
      set(v) {
        emit('update:checkboxes', v);
      },
    });

    return {
      localCheckboxes,
    };
  },
});
</script>

<style lang="scss" scoped>
.CheckboxList {
  display: grid;
  gap: 10px;
  &__item {
    transition: 0.3s;
    padding: 5px;
    border-radius: 5px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
