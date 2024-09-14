<script setup lang="ts">
import OptionTemplate from '@/components/options/OptionTemplate.vue';
</script>

<template>
  <OptionTemplate class="option-answer-slot">
    <template #default>
      <slot name="default">&nbsp;</slot>
    </template>
    <template #suffix>
      <slot name="suffix"></slot>
    </template>
  </OptionTemplate>
</template>

<style scoped lang="scss">
.option-answer-slot {
  border-style: dashed;
  background-color: transparent;
  cursor: default;
}
</style>
