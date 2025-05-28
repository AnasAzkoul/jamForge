<script setup lang="ts">
import {NavigationMenuItem} from "@/components/ui/navigation-menu";
import {RouterLink} from "vue-router";

interface Props {
  to: {name: string} | string;
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <NavigationMenuItem :class="`${props.class} hover:bg-secondary text-foreground`">
    <RouterLink :to="to" >
      <Slot class="text-foreground"></Slot>
    </RouterLink>
  </NavigationMenuItem>
</template>

<style scoped>

</style>