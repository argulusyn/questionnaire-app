<script setup lang="ts">
import BaseIcon from '@/components/common/icons/BaseIcon.vue';

defineProps({
  viewBox: {
    type: String,
    default: '0 0 16 16',
  },
});
</script>

<template>
  <BaseIcon :view-box="viewBox">
    <mask
      id="mask0_230_128"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="16"
      height="16"
    >
      <rect width="16" height="16" />
    </mask>
    <g mask="url(#mask0_230_128)">
      <path
        d="M4.84999 10.1756L4.23077 9.55642L7.99999 5.7872L11.7692 9.55642L11.15 10.1756L7.99999 7.02562L4.84999 10.1756Z"
      />
    </g>
  </BaseIcon>
</template>

<style scoped lang="scss">
.base-icon {
  fill: currentColor;
}
</style>
