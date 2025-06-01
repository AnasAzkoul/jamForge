<script setup lang="ts">
type Props = {
  class?:string;
  layout?: 'horizontal' | 'vertical';
}

const props = withDefaults(defineProps<Props>(), {
  layout: 'vertical',
});
</script>

<template>
  <div
    :class="{
      'flex gap-1.5': true,
      'flex-col': props.layout === 'vertical',
      [props.class as string]: typeof props.class !== 'undefined',
    }"
  >
    <slot></slot>
  </div>
</template>
