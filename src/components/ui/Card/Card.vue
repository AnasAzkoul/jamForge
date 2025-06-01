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
    class="flex flex-col justify-center border-2 border-gray-600 rounded-md p-4 gap-6 min-w-xl"
    :class="props.class"
  >
    <slot />
  </div>
</template>
