import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { pageNames } from "@/router/pageNames";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: pageNames.DEFAULT,
      component: () => import("@views/Default.vue"),
    },
  ] as RouteRecordRaw[],
});
