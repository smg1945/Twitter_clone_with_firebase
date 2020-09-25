import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyACDv0_4L_9JwuC-Xt89TyQr38Gt2hOD7o",
    authDomain: "switter-6e134.firebaseapp.com",
    databaseURL: "https://switter-6e134.firebaseio.com",
    projectId: "switter-6e134",
    storageBucket: "switter-6e134.appspot.com",
    messagingSenderId: "512097507782",
    appId: "1:512097507782:web:35e782f7ab23df28637ac7"
  };

 firebase.initializeApp(firebaseConfig);
 
 export const firebaseInstance = firebase;

 export const authService = firebase.auth();
 export const dbService = firebase.firestore();
 export const storageService = firebase.storage();