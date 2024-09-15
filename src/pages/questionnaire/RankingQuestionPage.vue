<script setup lang="ts">
import { type PropType } from 'vue';
import BaseQuestionPage from '@/pages/questionnaire/BaseQuestionPage.vue';
import RankingQuestion from '@/components/questions/RankingQuestion.vue';

defineProps({
  options: {
    type: Array as PropType<RankingQuestionOption[]>,
    default: () => [],
  },
  title: {
    type: String,
    default: '',
  },
  helperText: {
    type: String,
    default: '',
  },
  answersLimit: {
    type: Number,
    default: undefined,
  },
});

const model = defineModel({
  type: Array as PropType<RankingQuestionOption[]>,
  default: () => [],
});
</script>

<template>
  <BaseQuestionPage class="ranking-question-page" :title="title" :helper-text="helperText">
    <template #question>
      <RankingQuestion v-model="model" :options="options" :answers-limit="answersLimit" />
    </template>
  </BaseQuestionPage>
</template>

<style scoped lang="scss"></style>
