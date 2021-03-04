import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { projectAuth } from "./firebase/config";
// global styles
import "./assets/main.css";

let app;
// onAuthStateChanged est un fonction qui est fire
// a chaque fois qu'un changemenent est reperé
projectAuth.onAuthStateChanged(() => {
  // on cree cette condition pour monter l'app seulement au premier lien avec le firebase
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount("#app");
  }
});
