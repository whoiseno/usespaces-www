import ui from "@nuxt/ui/vue-plugin";
import { createHead } from "@unhead/vue/client";
import { createApp } from "vue";

import "./assets/main.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.use(ui);

app.mount("#app");
