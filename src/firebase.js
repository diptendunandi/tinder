import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDXVytO_w_yZOgdp6aRI1r7oyDebJFDXY8",
    authDomain: "tinder-clone-5f8e1.firebaseapp.com",
    projectId: "tinder-clone-5f8e1",
    storageBucket: "tinder-clone-5f8e1.appspot.com",
    messagingSenderId: "746065411076",
    appId: "1:746065411076:web:f87d29c0258fec293fc951",
    measurementId: "G-0K1PRREYKS"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const database=firebase.firestore();

  export default database;