import { createApp } from "vue";
import App from "./App.vue";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import BookView from "@/views/BookView.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeView,
  },
  {
    name: "about",
    path: "/about",
    component: AboutView,
  },
  {
    name: "details",
    path: "/books/:isbn",
    component: BookView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
