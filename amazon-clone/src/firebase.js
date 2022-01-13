import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDjHGkF2ahbHXTeERWUu45l4Qu9ADdjC1M",
    authDomain: "onlinestore-d31a3.firebaseapp.com",
    databaseURL: "https://onlinestore-d31a3.firebaseio.com",
    projectId: "onlinestore-d31a3",
    storageBucket: "onlinestore-d31a3.appspot.com",
    messagingSenderId: "612121087555",
    appId: "1:612121087555:web:70a865cb4f7b47728a0ef6",
    measurementId: "G-C5B4XH6LQ4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };