<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
} from '@/components/ui/navigation-menu';
import {Button} from "@/components/ui/button";
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import DarkModeToggle from "@/components/composites/DarkModeToggle.vue";
import {useRouter} from "vue-router";
import {RouterLink} from "vue-router";

const router = useRouter();
</script>

<template>
<NavigationMenu class="max-w-7xl mx-auto flex justify-between gap-6 list-none text-foreground px-6 py-2">
  <NavigationMenuItem class="mr-auto">
    <RouterLink :to="{name: 'home'}">
      JamForge
    </RouterLink>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <RouterLink :to="{name: 'myTabs'}">
      My Tabs
    </RouterLink>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <RouterLink :to="{name: 'learn'}">
      Learn
    </RouterLink>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <RouterLink :to="{name: 'community'}">
      Community
    </RouterLink>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <RouterLink :to="{name: 'settings'}">
      Settings
    </RouterLink>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <Button variant="secondary" @click="() => router.push({name: 'newTab'})">New Tab</Button>
  </NavigationMenuItem>
  <Avatar>
    <AvatarFallback class="text-gray-950">AA</AvatarFallback>
  </Avatar>
  <DarkModeToggle />
</NavigationMenu>
</template>
