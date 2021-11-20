import firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCE41lFEnh30y3-cgfpKCTYO4fwRFhLykE",
  authDomain: "slack-clone-b2dcb.firebaseapp.com",
  projectId: "slack-clone-b2dcb",
  storageBucket: "slack-clone-b2dcb.appspot.com",
  messagingSenderId: "761024258957",
  appId: "1:761024258957:web:915b707c02b831d82d93c4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
