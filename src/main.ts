import { createApp } from "vue";
import { vue3Debounce } from "vue-debounce";
import { createPinia } from "pinia";

import "./style.css";

import App from "./App.vue";

import { router } from "@/router/index";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.directive("debounce", vue3Debounce({ lock: true }));

app.mount("#app");
