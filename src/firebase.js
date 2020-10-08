import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACeI8YJvJv3h0k4hXVAFKgFh5RNp6Hc-I",
  authDomain: "instagram-clone-c49df.firebaseapp.com",
  databaseURL: "https://instagram-clone-c49df.firebaseio.com",
  projectId: "instagram-clone-c49df",
  storageBucket: "instagram-clone-c49df.appspot.com",
  messagingSenderId: "780199814313",
  appId: "1:780199814313:web:43bb1811eb05c8dfec35b8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

export default firebase;
