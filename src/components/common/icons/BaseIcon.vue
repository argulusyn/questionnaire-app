<script setup lang="ts">
defineProps({
  viewBox: {
    type: String,
    default: '0 0 16 16',
  },
});
</script>

<template>
  <svg class="base-icon" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg">
    <slot name="default"></slot>
  </svg>
</template>

<style scoped lang="scss">
.base-icon {
  fill: currentColor;
  width: 1rem;
}
</style>
