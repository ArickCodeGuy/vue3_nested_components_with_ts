<script lang="ts">
import { defineComponent, ref } from 'vue';
import { BorderBox, Checkbox, CheckboxList } from './components/types';

const useCheckbox = (): Checkbox => ({
  modelValue: false,
});

export default defineComponent({
  setup() {
    const bbcheckboxes: CheckboxList = {
      checkboxes: [
        {
          checkbox: useCheckbox(),
          label: 'ch 1',
        },
        {
          checkbox: useCheckbox(),
          label: 'ch 2',
        },
      ],
    };

    const borderBox = ref<BorderBox>({
      heading: 'Some Heading',
      checkboxList: bbcheckboxes,
    });

    return { borderBox };
  },
});
</script>

<template>
  <div>
    {{ borderBox }}
    <border-box v-bind="borderBox" />
  </div>
</template>

<style scoped></style>
