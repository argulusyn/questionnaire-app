import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { type QuestionnaireAnswer, QuestionnaireStep } from '@/types/questionnaire';

export const useQuestionnaireStore = defineStore('questionnaire', () => {
  const currentStepId = ref<QuestionnaireStep | null>(null);
  const questionnaireAnswers = ref<{ [key in QuestionnaireStep]: QuestionnaireAnswer }>({
    [QuestionnaireStep.importantWhenSelectingJob]: [],
  });

  const currentStepAnswers = computed(() => {
    return currentStepId.value && questionnaireAnswers.value[currentStepId.value];
  });

  const setCurrentStepId = (stepId: QuestionnaireStep | null) => {
    currentStepId.value = stepId;
  };

  const setStepQuestionnaireAnswer = (stepId: QuestionnaireStep, value: QuestionnaireAnswer) => {
    questionnaireAnswers.value[stepId] = value;
  };

  return {
    currentStepId,
    questionnaireAnswers,
    currentStepAnswers,
    setCurrentStepId,
    setStepQuestionnaireAnswer,
  };
});
