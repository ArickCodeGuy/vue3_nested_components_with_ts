<template>
  <div class="CheckboxList" v-if="checkboxes">
    <checkbox-label
      v-for="(checkboxLabel, i) in checkboxes"
      v-bind="checkboxLabel"
      class="CheckboxList__item"
      :key="i"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CheckboxList } from '../types';

export default defineComponent({
  props: {
    checkboxes: {
      type: Array as PropType<CheckboxList['checkboxes']>,
      default: () => [],
    },
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
