import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./routes/routes.ts";
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";

const app = createApp(App);

app
  .use(router)
  // .use(Vue3Toastify, {
  //   autoClose: 3000,
  // } as ToastContainerOptions)
  .mount("#app");
