import { storeToRefs } from 'pinia';
import { useQuestionnaireStore } from '@/stores/questionnaire';
import { computed, type ComputedRef, type Ref } from 'vue';
import { type QuestionnaireAnswer, QuestionnaireStep } from '@/types/questionnaire';
import RankingQuestionPage from '@/pages/questionnaire/RankingQuestionPage.vue';
import { QuestionnaireOptions } from '@/constants/questionnaire-options';

export const useQuestionnaireConfig = () => {
  const questionnaireStore = useQuestionnaireStore();
  const { setCurrentStepId, setStepQuestionnaireAnswer } = questionnaireStore;
  const { currentStepId, questionnaireAnswers, currentStepAnswers } =
    storeToRefs(questionnaireStore);

  /**
   * Alternatively can handle the config in a separate component, but that's for the case
   * when the questions are known beforehand (static).
   *
   * This approach will suit better for a dynamic more complicated case when the questions might
   * need to be fetched from the server
   */
  const questionnaireConfig = computed(() => {
    return {
      [QuestionnaireStep.importantWhenSelectingJob]: {
        id: QuestionnaireStep.importantWhenSelectingJob,
        component: RankingQuestionPage,
        progress: 21,
        dynamicProps: {
          modelValue: computed(() => {
            return questionnaireAnswers.value[QuestionnaireStep.importantWhenSelectingJob];
          }),
        },
        staticProps: {
          options: QuestionnaireOptions[QuestionnaireStep.importantWhenSelectingJob],
          answersLimit: 3,
          title: 'Which of the following are most important when selecting a job?',
          helperText: 'Rank your top three items',
        },
        listeners: {
          'update:modelValue': (value: QuestionnaireAnswer) => {
            setStepQuestionnaireAnswer(QuestionnaireStep.importantWhenSelectingJob, value);
          },
        },
      },
    };
  });

  const currentStepConfig = computed(() => {
    return currentStepId.value && questionnaireConfig.value[currentStepId.value];
  });

  const currentStepStaticProps = computed(() => {
    return currentStepConfig.value?.staticProps || {};
  });

  /**
   * This is an optimization to only recalculate currentStepDynamicProps when the answers update
   * rather than recalculating whole questionnaireConfig
   */
  const currentStepDynamicProps = computed(() => {
    const dynamicProps =
      currentStepConfig.value?.dynamicProps || ({} as { [key: string]: Ref | ComputedRef });

    return Object.entries(dynamicProps).reduce(
      (unwrappedProperties, [propertyKey, propertyRef]) => {
        return {
          ...unwrappedProperties,
          [propertyKey]: propertyRef.value,
        };
      },
      {},
    );
  });

  return {
    currentStepConfig,
    currentStepStaticProps,
    currentStepDynamicProps,
    questionnaireConfig,
    currentStepId,
    questionnaireAnswers,
    currentStepAnswers,
    setCurrentStepId,
    setStepQuestionnaireAnswer,
  };
};
