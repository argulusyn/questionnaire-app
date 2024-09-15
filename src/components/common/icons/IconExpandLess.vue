<script setup lang="ts">
import BaseIcon from '@/components/common/icons/BaseIcon.vue';

defineProps({
  viewBox: {
    type: String,
    default: '0 0 24 24',
  },
});
</script>

<template>
  <BaseIcon :view-box="viewBox">
    <mask
      id="mask0_282_187"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect width="24" height="24" />
    </mask>
    <g mask="url(#mask0_282_187)">
      <path
        d="M7.27502 15.2634L6.34619 14.3346L12 8.68079L17.6538 14.3346L16.725 15.2634L12 10.5384L7.27502 15.2634Z"
      />
    </g>
  </BaseIcon>
</template>

<style scoped lang="scss"></style>
