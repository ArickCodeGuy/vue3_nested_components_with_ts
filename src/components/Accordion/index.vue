<template>
  <div class="Accordion">
    <div class="Accordion-body" ref="body" @click="targetShown = !targetShown">
      <slot></slot>
    </div>
    <Teleport to="#accordion-target">
      <div class="Accordion-target" ref="target">
        <slot v-if="targetShown" name="target"></slot>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import Attacher from './utils/Attacher';

export default defineComponent({
  setup() {
    const targetShown = ref(false);
    const target = ref<HTMLElement | null>(null);
    const body = ref<HTMLElement | null>(null);
    let attacher: Attacher;

    onUnmounted(() => {
      attacher?.destroy();
    });

    watch(targetShown, () => {
      if (targetShown.value && target.value && body.value) {
        attacher = new Attacher(target.value, body.value);
        attacher.init();
        return;
      }
      attacher?.destroy();
    });

    return { targetShown, target, body };
  },
});
</script>

<style>
.Accordion-target {
  position: absolute;
  z-index: 1010;
  background-color: black;
}
</style>
