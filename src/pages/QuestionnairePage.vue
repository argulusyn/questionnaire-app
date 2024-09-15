<script setup lang="ts">
import ProgressBar from '@/components/common/ProgressBar.vue';
import PoweredByTip from '@/components/global/PoweredByTip.vue';
import NavigationButtons from '@/components/common/NavigationButtons.vue';
import { useQuestionnaireConfig } from '@/composables/useQuestionnaireConfig';
import { QuestionnaireStep } from '@/types/questionnaire';
import { computed, onBeforeMount } from 'vue';

const { setCurrentStepId, currentStepConfig, currentStepDynamicProps, currentStepStaticProps } =
  useQuestionnaireConfig();

onBeforeMount(() => {
  setCurrentStepId(QuestionnaireStep.importantWhenSelectingJob);
});

const progress = computed(() => {
  return currentStepConfig.value?.progress || 0;
});
</script>

<template>
  <main class="question-page">
    <ProgressBar class="question-page__progress" :value="progress" />
    <NavigationButtons class="question-page__navigation-buttons" />

    <div class="question-page__content">
      <component
        v-if="currentStepConfig"
        :is="currentStepConfig.component"
        v-bind="{ ...currentStepStaticProps, ...currentStepDynamicProps }"
        v-on="currentStepConfig?.listeners"
      />
    </div>

    <PoweredByTip class="question-page__powered-by" />
  </main>
</template>

<style scoped lang="scss">
.question-page {
  width: 100%;
  height: 100%;

  &__progress {
    position: fixed;
    top: 0;
    left: 0;
  }

  &__navigation-buttons {
    position: fixed;
    top: 55px;
    right: 8px;
  }

  &__content {
    padding: 3% 9%;

    @media (min-width: 768px) {
      padding: 3.75% 12.5%;
    }

    @media (min-width: 1440px) {
      padding: 3.25rem 8rem;
      max-width: 1440px;
      margin: 0 auto;
    }
  }

  &__powered-by {
    position: fixed;
    bottom: var(--space-2);
    right: var(--space-2);
  }
}
</style>
