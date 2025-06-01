<script setup lang="ts">
type Props = {
  class?: string;
};

const props = withDefaults(defineProps<Props>(), {
  class: "",
});
</script>

<template>
  <div
    class="flex flex-col items-center gap-14 min-h-screen"
    :class="props.class"
  >
    <h1 class="mt-15 text-3xl">
      <slot name="header" />
    </h1>
    <slot />
  </div>
</template>
