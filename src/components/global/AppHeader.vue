<script setup lang="ts">
import AppTextLogo from '@/components/common/AppTextLogo.vue';
</script>

<template>
  <header class="app-header">
    <AppTextLogo />
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  display: flex;
  place-items: center;

  width: 100%;
  min-height: 48px;
  padding: var(--space-3) var(--space-4);
  border-bottom: 1px solid var(--color-border);
}
</style>
