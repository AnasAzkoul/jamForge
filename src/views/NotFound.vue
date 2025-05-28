<script setup lang="ts">
import {Button} from "@/components/ui/button";
import {useRouter} from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="max-w-xl mx-auto flex flex-col justify-center items-center mt-10 gap-14">
    <h1 class="text-4xl">404</h1>
    <p class="text-xl">The riff you are looking for is out of tune.</p>
    <Button @click="() => router.push({name:'home'})" variant="outline">Return To Dashboard</Button>
  </div>

</template>

<style scoped>

</style>