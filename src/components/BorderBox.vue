<template>
  <div class="BorderBox">
    <div class="BorderBox__heading">{{ heading }}</div>
    <checkbox-list v-if="checkboxList?.checkboxes" v-bind="checkboxList" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { BorderBox } from './types';

export default defineComponent({
  props: {
    heading: {
      type: String as PropType<BorderBox['heading']>,
    },
    checkboxList: {
      type: Object as PropType<BorderBox['checkboxList']>,
      default: () => ({}),
    },
  },
});
</script>

<style lang="scss" scoped>
.BorderBox {
  width: 260px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid white;
  &__heading {
    font-size: 2em;
    // font-weight: bold;
    margin-bottom: 1em;
  }
}
</style>
