import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/auth/Signup.vue";
import Login from "../views/auth/Login.vue";
import CreatePlaylist from "../views/playlist/CreatePlaylist.vue";
import PlaylistDetail from "../views/playlist/PlaylistDetail.vue";

// route guard
import { projectAuth } from "../firebase/config";

const requiredAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "Login" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: requiredAuth,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/playlists/create",
    name: "CreatePlaylist",
    component: CreatePlaylist,
    beforeEnter: requiredAuth,
  },
  {
    path: "/playlists/:id",
    name: "PlaylistDetail",
    component: PlaylistDetail,
    beforeEnter: requiredAuth,
    // permet d'injecter id dans les props de playlistDetail
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
