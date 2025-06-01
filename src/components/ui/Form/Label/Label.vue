<script setup lang="ts">
type Props = {
  for: string;
  class?: string;
};

const props = defineProps<Props>();
</script>
<template>
  <label
    :for="props.for"
    :class="{
    'block text-gray-500': true,
    [props.class as string]: typeof props.class !== 'undefined',
  }"
  >
    <slot></slot>
  </label>
</template>

<style scoped></style>
