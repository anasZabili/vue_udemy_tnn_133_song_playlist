<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create new playlist</h4>
    <input type="text" required placeholder="Playlist title" v-model="title" />
    <textarea
      required
      placeholder="Playlist description..."
      v-model="description"
    ></textarea>
    <label>Upload playlist cover image</label>
    <input type="file" @change="handleChange" />
    <div class="error">{{ fileError }}</div>
    <div class="error"></div>
    <button>Create</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useStorage from "@/composables/useStorage";
export default {
  setup() {
    const title = ref("");
    const description = ref("");
    const file = ref(null);
    const fileError = ref(null);
    const { url, filePath, uploadImage } = useStorage();
    const handleSubmit = async () => {
      if (file.value) {
        await uploadImage(file.value);
        console.log("upload done url:", url.value);
      }
    };

    // allowed file types
    const types = ["image/png", "image/jpeg"];
    const handleChange = (e) => {
      const selected = e.target.files[0];
      if (selected && types.includes(selected.type)) {
        file.value = selected;
        fileError.value = null;
      } else {
        file.value = null;
        fileError.value = "Please select an image file (png ou jpeg)";
      }
    };
    return { title, fileError, description, handleSubmit, handleChange };
  },
};
</script>

<style>
input[type="file"] {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}
label {
  font-size: 12px;
  display: block;
  margin-top: 30px;
}
button {
  margin-top: 20px;
}
</style>