// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth to access auth object
import { getFirestore } from "firebase/firestore"; // Import getFirestore for Firestore
require('firebase/auth');
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxGYSwp51AH93j1ewkqFNM6UPtI854Vr0",
  authDomain: "clone-da55e.firebaseapp.com",
  projectId: "clone-da55e",
  storageBucket: "clone-da55e.appspot.com",
  messagingSenderId: "627325959652",
  appId: "1:627325959652:web:a5b9133c6f987e03ce5bf1",
  measurementId: "G-8QHP7YK0XP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Access auth object using getAuth function
const db = getFirestore(app); // Access Firestore object using getFirestore function

export { db, auth };
