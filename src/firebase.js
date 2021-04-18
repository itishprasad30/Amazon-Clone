// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBwQtnvwcvwRw18pmxv_5SoG_mA54ZprOU",
  authDomain: "clone-ca929.firebaseapp.com",
  projectId: "clone-ca929",
  storageBucket: "clone-ca929.appspot.com",
  messagingSenderId: "54728564625",
  appId: "1:54728564625:web:0ba670338f649549e8c430",
  measurementId: "G-1X5TV24BDH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
