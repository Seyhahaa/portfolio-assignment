import "./assets/index.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  CoFacebook,
  BiGithub,
  BiLinkedin,
  BiInstagram,
  BiArrowRightCircle,
  CoDoubleQuoteSansLeft,
  CoDoubleQuoteSansRight,
  MdEmailRound,
  BiTelegram,
} from "oh-vue-icons/icons";

addIcons(
  CoFacebook,
  BiGithub,
  BiLinkedin,
  BiInstagram,
  BiArrowRightCircle,
  CoDoubleQuoteSansLeft,
  CoDoubleQuoteSansRight,
  MdEmailRound,
  BiTelegram,
);

const app = createApp(App);
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount("#app");
