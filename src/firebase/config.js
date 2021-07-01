import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  x: "xxx"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();
// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
