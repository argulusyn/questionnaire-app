<script setup lang="ts">
import BaseButton from '@/components/common/buttons/BaseButton.vue';
</script>

<template>
  <BaseButton class="secondary-button">
    <template #prepend>
      <slot name="prepend"></slot>
    </template>
    <template #default>
      <slot name="default"></slot>
    </template>
    <template #append>
      <slot name="append"></slot>
    </template>
  </BaseButton>
</template>

<style scoped lang="scss">
.secondary-button {
  font-size: 0.8125rem;
  padding: var(--space-1) var(--space-2);
  color: var(--button-text-secondary);
  background-color: var(--button-background-secondary);
}
</style>
