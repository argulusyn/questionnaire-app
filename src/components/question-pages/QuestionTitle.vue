<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  helperText: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <div class="question-title">
    <h2 class="question-title__heading">{{ title }}</h2>
    <p v-if="helperText" class="question-title__helper-text">{{ helperText }}</p>
  </div>
</template>

<style scoped lang="scss">
.question-title {
  &__heading {
    font-size: 1.1875rem;
    line-height: 1.5;
  }

  &__helper-text {
    font-size: 0.8125rem;
    color: var(--color-text-secondary);
    margin-top: var(--space-1);
  }
}
</style>
