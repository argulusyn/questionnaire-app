import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'questionnaire-page',
      component: () => import('@/pages/QuestionnairePage.vue'),
    },
  ],
});

export default router;
