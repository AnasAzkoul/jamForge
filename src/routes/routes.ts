import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  // ---------------- main app --------------------------------------------
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/myTabs",
    name: "myTabs",
    component: () => import("../views/MyTabs.vue"),
  },
  {
    path: "/community",
    name: "community",
    component: () => import("../views/Community.vue"),
  },
  {
    path: "/newTab",
    name: "newTab",
    component: () => import("../views/NewTab.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/Settings.vue"),
  },
  {
    path: "/learn",
    name: "learn",
    component: () => import("../views/Learn.vue"),
  },

  // ---------------- Auth --------------------------------------------
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/Signup.vue"),
    meta: { hideNavbar: true },
  },
  {
    path: "/signIn",
    name: "signIn",
    component: () => import("../views/Signin.vue"),
    meta: { hideNavbar: true },
  },
  // ---------------- 404 --------------------------------------------
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("../views/NotFound.vue"),
  },
] as const;

// This is to automatically generate a union type of route name, for type safety and autocompletion for the route names
export type RouteName =
  | "home"
  | "myTabs"
  | "community"
  | "newTab"
  | "settings"
  | "learn"
  | "notFound"
  | "signup"
  | "signIn";
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
