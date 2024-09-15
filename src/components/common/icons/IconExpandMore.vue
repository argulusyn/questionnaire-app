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
      id="mask0_282_192"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="24"
    >
      <rect width="24" height="24" />
    </mask>
    <g mask="url(#mask0_282_192)">
      <path
        d="M12 15.3384L6.34619 9.68462L7.27502 8.7558L12 13.4808L16.725 8.7558L17.6538 9.68462L12 15.3384Z"
      />
    </g>
  </BaseIcon>
</template>

<style scoped lang="scss"></style>
