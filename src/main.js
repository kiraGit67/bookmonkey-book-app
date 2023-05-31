import { createApp } from "vue";
import App from "./App.vue";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomeView,
  },
  {
    name: "About",
    path: "/about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const app = createApp(App);

app.use(router);

app.mount("#app");
