<script setup lang="ts">
import BaseButton from '@/components/common/buttons/BaseButton.vue';
</script>

<template>
  <BaseButton class="primary-button">
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
.primary-button {
  padding: var(--space-2) var(--space-4);
  border-radius: 2px;
  color: var(--button-text-primary);
  background-color: var(--button-background-primary);
}
</style>
