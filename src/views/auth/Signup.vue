<template>
  <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="text" placeholder="Display name" v-model="displayname" />
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div class="error" v-if="error">
      {{ error }}
    </div>
    <button v-if="!isPending">Sign up</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>


<script>
import { ref } from "vue";
import useSignup from "@/composables/useSignup";
export default {
  setup() {
    const { error, signup, isPending } = useSignup();
    const email = ref("");
    const password = ref("");
    const displayname = ref("");
    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayname.value);
      if (!error.value) {
        console.log("user signed up");
      }
    };

    return { email, password, displayname, isPending, handleSubmit, error };
  },
};
</script>

<style>
</style>