import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3enxhsAa67OZyHHWUdYmliZqqNxlhwXs",
    authDomain: "tugasdpm-f56a4.firebaseapp.com",
    databaseURL: "https://tugasdpm-f56a4-default-rtdb.firebaseio.com",
    projectId: "tugasdpm-f56a4",
    storageBucket: "tugasdpm-f56a4.appspot.com",
    messagingSenderId: "753579737595",
    appId: "1:753579737595:web:5ca3b36ad22578c2670b5e",
    measurementId: "G-9EHJ081SCZ"
  };

  let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { auth, db };
