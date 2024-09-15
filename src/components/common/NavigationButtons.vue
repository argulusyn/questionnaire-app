<script setup lang="ts">
import IconExpandMore from '@/components/common/icons/IconExpandMore.vue';
import IconExpandLess from '@/components/common/icons/IconExpandLess.vue';
</script>

<template>
  <div class="navigation-buttons">
    <button class="navigation-buttons__button">
      <IconExpandLess class="navigation-buttons__icon" />
    </button>
    <button class="navigation-buttons__button">
      <IconExpandMore class="navigation-buttons__icon" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.navigation-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);

  &__button {
    padding: 2px;
    border: 1px solid var(--color-border);
    background: transparent;
    line-height: 1;
    cursor: pointer;
  }

  &__icon {
    color: var(--color-accent);
    width: 1.5rem;
  }
}
</style>
