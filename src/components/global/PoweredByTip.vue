<script setup lang="ts"></script>

<template>
  <div class="powered-by-tip">
    <img
      class="powered-by-tip__image"
      src="@/assets/images/logo.svg"
      alt="Questionnaire logo image"
    />
    <span class="powered-by-tip__text">Powered by Questionnaire App</span>
  </div>
</template>

<style scoped lang="scss">
.powered-by-tip {
  display: flex;
  place-items: center;
  gap: var(--space-1);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: var(--space-1);

  &__image {
    height: 1rem;
  }

  &__text {
    color: var(--color-text);
    font-size: 0.6875rem;
    line-height: 1.2;
  }
}
</style>
