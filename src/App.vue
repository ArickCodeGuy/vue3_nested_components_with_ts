<script lang="ts">
import { defineComponent, ref } from 'vue';
import { BorderBox, Checkbox, CheckboxList } from './components/types';

const useCheckbox = (): Checkbox => ({
  modelValue: false,
});

export default defineComponent({
  setup() {
    const borderBoxCheckboxesProps: CheckboxList = {
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
      checkboxList: borderBoxCheckboxesProps,
    });

    const isModalShown = ref(false);

    return { borderBox, isModalShown };
  },
});
</script>

<template>
  <Main>
    <!-- <div>
      {{ borderBox }}
      <border-box v-bind="borderBox" />
    </div> -->
    <div>
      <button @click="isModalShown = true">open modal</button>
      <Modal v-model="isModalShown">
        <div class="m-body">
          <Accordion>
            <button>toggleAccordion</button>
            <template #target>target</template>
          </Accordion>
        </div>
      </Modal>
    </div>
  </Main>
</template>

<style scoped>
.m-body {
  height: 1000px;
}
</style>
