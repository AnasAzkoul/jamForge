<script setup lang="ts">
import Navbar from "./components/composites/Navbar.vue";
import { RouterView, useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const isAuth = computed(() => {
  return route.meta.hideNavbar;
});
</script>

<template>
  <Navbar v-if="!isAuth" />
  <body class="bg-background h-screen">
    <RouterView />
  </body>
</template>
