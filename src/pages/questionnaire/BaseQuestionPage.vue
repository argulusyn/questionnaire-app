<script setup lang="ts">
import QuestionTitle from '@/components/question-pages/QuestionTitle.vue';
import QuestionPageTopNavigation from '@/components/question-pages/QuestionPageTopNavigation.vue';
import QuestionPageBottomNavigation from '@/components/question-pages/QuestionPageBottomNavigation.vue';

defineProps({
  title: {
    type: String,
    default: undefined,
  },
  helperText: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <div class="base-question-page">
    <slot name="top-navigation">
      <QuestionPageTopNavigation class="base-question-page__top-navigation" />
    </slot>
    <slot name="title">
      <QuestionTitle class="base-question-page__title" :title="title" :helper-text="helperText" />
    </slot>
    <slot name="question-wrapper">
      <div class="base-question-page__question-wrapper">
        <slot name="question"></slot>
      </div>
    </slot>
    <slot name="bottom-navigation">
      <QuestionPageBottomNavigation class="base-question-page__bottom-navigation" />
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.base-question-page {
  &__title {
    margin-top: var(--space-3);
  }

  &__question-wrapper {
    margin-top: var(--space-11);
  }

  &__bottom-navigation {
    margin-top: var(--space-4);
  }
}
</style>
