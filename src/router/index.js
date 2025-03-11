// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/terms",
    name: "Terms",
    component: () => import("../views/Terms.vue"),
  },
  {
    path: "/events",
    name: "Events",
    component: () => import("../views/Events.vue"),
  },
  {
    path: "/contact",
    name: "Contact Us",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/success",
    name: "Success",
    component: () => import("../views/Contact.vue"),
  },
  // {
  //   path: "/articles",
  //   name: "Articles",
  //   component: () => import("../views/Articles.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
