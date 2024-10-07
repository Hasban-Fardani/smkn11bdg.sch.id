import "./style.css";
import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import { routes } from "./routes";
import { createHead } from '@unhead/vue'
import App from "./App.vue";

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const head = createHead()

const app = createApp(App);

app.use(head)
app.use(router);
app.mount("#app");
