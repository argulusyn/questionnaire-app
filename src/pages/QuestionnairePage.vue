<script setup lang="ts">
import ProgressBar from '@/components/common/ProgressBar.vue';
</script>

<template>
  <main class="question-page">
    <ProgressBar class="question-page__progress" :value="21" />

    <div class="question-page__content">
      <RouterView />
    </div>
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

  &__content {
    padding: 3rem 10rem;
  }
}
</style>
