import { QuestionnaireStep } from '@/types/questionnaire';

export const QuestionnaireOptions = {
  [QuestionnaireStep.importantWhenSelectingJob]: [
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
  ],
};
