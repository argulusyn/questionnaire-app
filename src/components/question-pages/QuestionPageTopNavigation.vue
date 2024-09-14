<script setup lang="ts">
import SecondaryButton from '@/components/common/buttons/SecondaryButton.vue';
import IconExpandLess from '@/components/common/icons/IconExpandLess.vue';
</script>

<template>
  <div class="question-page-navigation">
    <SecondaryButton>
      <template #prepend><IconExpandLess /></template>
      Prev
    </SecondaryButton>
  </div>
</template>

<style scoped lang="scss"></style>
