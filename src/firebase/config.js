import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRs3uEi9yQf3D5eaosQM3NhLteYdFiUWA",
  authDomain: "music-playlist-tnn-vue.firebaseapp.com",
  projectId: "music-playlist-tnn-vue",
  storageBucket: "music-playlist-tnn-vue.appspot.com",
  messagingSenderId: "595909614759",
  appId: "1:595909614759:web:aa98f4e23cec516f544f82",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
