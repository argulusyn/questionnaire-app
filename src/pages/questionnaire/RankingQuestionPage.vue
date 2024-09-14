<script setup lang="ts">
import { ref } from 'vue';
import BaseQuestionPage from '@/pages/questionnaire/BaseQuestionPage.vue';
import RankingQuestion from '@/components/questions/RankingQuestion.vue';

const availableOptions = ref([
  {
    key: 'salaryAndBenefits',
    label: 'Salary and benefits',
    value: 'salaryAndBenefits',
  },
  {
    key: 'workLifeBalance',
    label: 'Work-life balance',
    value: 'workLifeBalance',
  },
  {
    key: 'careerAdvancementOpportunities',
    label: 'Career advancement opportunities',
    value: 'careerAdvancementOpportunities',
  },
  {
    key: 'companyCulture',
    label: 'Company culture',
    value: 'companyCulture',
  },
  {
    key: 'jobLocation',
    label: 'Job location',
    value: 'jobLocation',
  },
]);
const selectedOptions = ref<RankingQuestionOption[]>([]);
</script>

<template>
  <BaseQuestionPage
    class="ranking-question-page"
    title="Which of the following are most important when selecting a job?"
    helper-text="Rank your top three items"
  >
    <template #question>
      <RankingQuestion v-model="selectedOptions" :options="availableOptions" :answers-limit="3" />
    </template>
  </BaseQuestionPage>
</template>

<style scoped lang="scss"></style>
