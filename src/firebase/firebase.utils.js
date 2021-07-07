import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// const config = {
//   apiKey: "AIzaSyCdHT-AYHXjF7wOrfAchX4PIm3cSj5tn14",
//   authDomain: "crwn-db.firebaseapp.com",
//   databaseURL: "https://crwn-db.firebaseio.com",
//   projectId: "crwn-db",
//   storageBucket: "crwn-db.appspot.com",
//   messagingSenderId: "850995411664",
//   appId: "1:850995411664:web:7ddc01d597846f65",
// };

const config = {
  apiKey: "AIzaSyCV2oqsMA-129zfBkgUna0kjkLOBT5ka_k",
  authDomain: "crwn-db-33bae.firebaseapp.com",
  projectId: "crwn-db-33bae",
  storageBucket: "crwn-db-33bae.appspot.com",
  messagingSenderId: "406752651675",
  appId: "1:406752651675:web:32a0cccf383e9b3d1c193e",
  measurementId: "G-33EHHBDQ18",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
