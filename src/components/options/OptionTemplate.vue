<script setup lang="ts">
defineProps({
  tag: {
    type: String,
    default: 'span',
  },
  label: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <component class="base-option-template" :is="tag">
    <slot name="content">
      <span class="base-option-template__content">
        <slot name="default">
          <span>{{ label }}</span>
        </slot>
        <slot name="suffix"></slot>
      </span>
    </slot>
  </component>
</template>

<style scoped lang="scss">
.base-option-template {
  padding: 0.75rem;
  border: 2px solid var(--color-border);
  border-radius: 0.5rem;
  background-color: var(--select-background-primary);
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    padding: 1.25rem;
    font-size: 1.1875rem;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-2);
  }
}
</style>
