<script setup lang="ts">
import Navbar from "@/components/composites/Navbar.vue";
import {RouterView, useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
<body class="bg-background h-screen">
  <Navbar v-if="!route.meta.hideNavbar" />
  <RouterView />
</body>
</template>

<style scoped>

</style>
