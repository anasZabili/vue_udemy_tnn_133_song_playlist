<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <button>Log in</button>
  </form>
</template>

<script>
import useLogin from "@/composables/useLogin";
import { ref } from "vue";
export default {
  setup() {
    const { error, login } = useLogin();
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      const res = await login(email.value, password.value);
      if (!error.value) {
        console.log("user logged in");
      }
    };
    return { email, password, handleSubmit, error };
  },
};
</script>

<style>
</style>