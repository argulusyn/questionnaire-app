<script setup lang="ts"></script>

<template>
  <div class="app-text-logo">
    <img class="app-text-logo__image" src="@/assets/images/logo.svg" alt="Logo image" />
    <span class="app-text-logo__text">questionnaire</span>
  </div>
</template>

<style lang="scss" scoped>
.app-text-logo {
  display: flex;
  align-items: center;
  gap: var(--space-1);

  &__image {
    width: 15px;

    @media (min-width: 1024px) {
      width: 20px;
    }
  }

  &__text {
    font-size: 0.75rem;
    font-weight: bold;
  }
}
</style>
