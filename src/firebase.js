// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyASUdSGhWe59sp8wqhEfiUjY5GXZ-dQFeI",
//     authDomain: "instagram-app-clone-b2a4f.firebaseapp.com",
//     databaseURL: "https://instagram-app-clone-b2a4f-default-rtdb.firebaseio.com",
//     projectId: "instagram-app-clone-b2a4f",
//     storageBucket: "instagram-app-clone-b2a4f.appspot.com",
//     messagingSenderId: "186630687841",
//     appId: "1:186630687841:web:0920a899b7d7c549d4ae20",
//     measurementId: "G-T5EHETDTN5"
//   };

import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyASUdSGhWe59sp8wqhEfiUjY5GXZ-dQFeI",
    authDomain: "instagram-app-clone-b2a4f.firebaseapp.com",
    databaseURL: "https://instagram-app-clone-b2a4f-default-rtdb.firebaseio.com",
    projectId: "instagram-app-clone-b2a4f",
    storageBucket: "instagram-app-clone-b2a4f.appspot.com",
    messagingSenderId: "186630687841",
    appId: "1:186630687841:web:0920a899b7d7c549d4ae20",
    measurementId: "G-T5EHETDTN5"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
export { db,auth,storage };