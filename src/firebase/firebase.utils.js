import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCV2oqsMA-129zfBkgUna0kjkLOBT5ka_k",
  authDomain: "crwn-db-33bae.firebaseapp.com",
  projectId: "crwn-db-33bae",
  storageBucket: "crwn-db-33bae.appspot.com",
  messagingSenderId: "406752651675",
  appId: "1:406752651675:web:32a0cccf383e9b3d1c193e",
  measurementId: "G-33EHHBDQ18",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "consent" }); //"select-account"
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
