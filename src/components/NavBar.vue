<template>
  <div class="navba">
    <nav>
      <img src="@/assets/ninja.png" alt="ninja" />
      <h1>
        <router-link :to="{ name: 'Home' }">My lovely playlist</router-link>
      </h1>
      <div class="links">
        <button @click="handleLogout">Logout</button>
        <router-link class="btn" :to="{ name: 'Signup' }">Signup</router-link>
        <router-link class="btn" :to="{ name: 'Login' }">Log in</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from "@/composables/useLogout";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { logout } = useLogout();
    const router = useRouter();
    const handleLogout = async () => {
      await logout();
      console.log("logout");
      router.push({ name: "Home" });
    };
    return { handleLogout };
  },
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
nav img {
  max-height: 60px;
}
</style>