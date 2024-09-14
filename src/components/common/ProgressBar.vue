<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
});

const progressBarStyles = computed(() => ({
  '--progress-bar-line-width': `${props.value}%`,
}));
</script>

<template>
  <div class="progress-bar" :style="progressBarStyles">
    <div class="progress-bar__line"></div>
  </div>
</template>

<style scoped lang="scss">
.progress-bar {
  width: 100%;
  height: 2px;
  background-color: var(--color-border);
  position: relative;

  &__line {
    position: absolute;
    top: 0;
    left: 0;
    height: 2px;
    background-color: var(--color-accent);
    width: var(--progress-bar-line-width, 0);
  }
}
</style>
