// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcFrOVaBTT_T9gqd8GdST6DNMzmCeAULg",
  authDomain: "authcheck-d20d2.firebaseapp.com",
  projectId: "authcheck-d20d2",
  storageBucket: "authcheck-d20d2.appspot.com",
  messagingSenderId: "1062704487534",
  appId: "1:1062704487534:web:6f3f7dd614da5acd8c9a7f"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig); 
export const FIREBASE_AUTH = getAuth(FIREBASE_APP); 