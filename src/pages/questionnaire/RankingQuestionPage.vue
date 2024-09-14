<script setup lang="ts">
import QuestionPageNavigation from '@/components/question-pages/QuestionPageNavigation.vue';
import QuestionTitle from '@/components/question-pages/QuestionTitle.vue';
</script>

<template>
  <div>
    <QuestionPageNavigation class="base-question-page__navigation" />
    <QuestionTitle
      class="base-question-page__title"
      title="Which of the following are most important when selecting a job?"
      helper-text="Rank your top three items"
    />
  </div>
</template>

<style scoped lang="scss"></style>
