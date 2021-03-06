<template>
  <div v-if="error" class="error">
    {{ error }}
  </div>
  <div v-if="playlist" class="playlist-details">
    <div class="playlist-info">
      <div class="cover">
        <img :src="playlist.coverUrl" alt="cover of the playlist" />
      </div>
      <h2>{{ playlist.title }}</h2>
      <p class="username">Created by {{ playlist.userName }}</p>
      <p class="description">{{ playlist.description }}</p>
      <button @click="handleDelete" v-if="!isPending">Delete Playlist</button>
      <button disabled v-if="ownerShip && isPending">Loading...</button>
      <div class="error">
        {{ errorDelete }}
      </div>
    </div>
    <!-- song playlist -->
    <div class="song-list">
      <p>song list here</p>
    </div>
  </div>
</template>

<script>
import getDocument from "@/composables/getDocument";
import getUser from "@/composables/getUser";
import useDocument from "@/composables/useDocument";
import { computed } from "vue";
import { useRouter } from "vue-router";
import useStorage from "@/composables/useStorage";

export default {
  props: ["id"],
  setup(props, context) {
    const { error, document: playlist } = getDocument("playlists", props.id);
    const { user } = getUser();
    const { deleteImage } = useStorage();
    const { error: errorDelete, isPending, deleteDoc } = useDocument(
      "playlists",
      props.id
    );
    const router = useRouter();
    const handleDelete = async () => {
      await deleteImage(playlist.value.filePath);
      await deleteDoc();
      if (!errorDelete.value) {
        router.push({ name: "Home" });
      }
    };
    // on va utiliser une computed property car le user connecté va changer
    // au cour du cycle de vie de l'applications on peut changer d'utilisateur
    const ownerShip = computed(() => {
      return (
        playlist.value && user.value && user.value.uid === playlist.value.userId
      );
    });
    return { error, playlist, ownerShip, handleDelete, isPending, errorDelete };
  },
};
</script>

<style>
.playlist-details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
}
.cover {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  padding: 160px;
}
.cover img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  max-width: 200%;
  max-height: 200%;
}
.playlist-info {
  text-align: center;
}
.playlist-info h2 {
  text-transform: capitalize;
  font-size: 28px;
  margin-top: 20px;
}
.playlist-info p {
  margin-bottom: 20px;
}
.username {
  color: #999;
}
.description {
  text-align: left;
}
</style>