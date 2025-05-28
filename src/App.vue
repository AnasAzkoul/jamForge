<script setup lang="ts">
import Navbar from "@/components/composites/Navbar.vue";
import {RouterView} from "vue-router";
</script>

<template>
<body class="bg-background h-screen">
  <Navbar />
  <RouterView />
</body>
</template>

<style scoped>

</style>
