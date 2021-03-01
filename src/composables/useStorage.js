import { ref } from "@vue/reactivity";
import { projectStorage } from "../firebase/config";
import getUser from "./getUser";

const { user } = getUser();

const useStorage = () => {
  const error = ref(null);
  const url = ref(null);
  const filePath = ref(null);

  const uploadImage = async (file) => {
    filePath.value = `covers/${user.value.uid}/${file.name}`;
    const storageRef = projectStorage.ref(filePath.value);
    try {
      const res = await storageRef.put(file);
      // represent l'urll de la sauvegarde dans le storage
      url.value = res.ref.getDownloadURL();
    } catch (err) {
      console.error(err.message);
      error.value = err.message;
    }
  };

  return { url, filePath, error, uploadImage };
};

export default useStorage;