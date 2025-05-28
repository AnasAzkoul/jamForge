<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';
import {Button} from "@/components/ui/button";
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import DarkModeToggle from "@/components/composites/DarkModeToggle.vue";

import {RouterLink} from "vue-router";
</script>

<template>
<NavigationMenu class="max-w-[1200px] mx-auto flex justify-between gap-6 list-none text-foreground px-6 py-2">
  <NavigationMenuItem class="mr-auto">
    <RouterLink :to="{name: 'Home'}">
      JamForge
    </RouterLink>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <RouterLink :to="{name: 'Home'}">
      My Tabs
    </RouterLink>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <RouterLink :to="{name: 'Home'}">
      Learn
    </RouterLink>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <RouterLink :to="{name: 'Home'}">
      Community
    </RouterLink>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <RouterLink :to="{name: 'Home'}">
      Settings
    </RouterLink>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <Button variant="secondary">New Tab</Button>
  </NavigationMenuItem>
  <Avatar>
    <AvatarFallback class="text-gray-950">AA</AvatarFallback>
  </Avatar>
  <DarkModeToggle />
</NavigationMenu>
</template>
