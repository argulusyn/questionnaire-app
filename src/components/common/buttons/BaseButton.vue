<script setup lang="ts"></script>

<template>
  <button class="base-button">
    <slot name="prepend"></slot>
    <slot name="default"></slot>
    <slot name="append"></slot>
  </button>
</template>

<style scoped lang="scss">
.base-button {
  display: flex;
  place-items: center;
  font-size: 1rem;
  line-height: 1.5;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-2);
  border: none;
  box-shadow: none;

  &:hover {
    cursor: pointer;
  }
}
</style>
