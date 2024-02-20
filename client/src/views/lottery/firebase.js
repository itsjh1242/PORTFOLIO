// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKlc7EFZrTnWDDsZIeDwfAApX-tQU7Qj4",
  authDomain: "react-lottery-3ed3a.firebaseapp.com",
  projectId: "react-lottery-3ed3a",
  storageBucket: "react-lottery-3ed3a.appspot.com",
  messagingSenderId: "113447128270",
  appId: "1:113447128270:web:3a8cb88e2be2cf3d1e549f",
  measurementId: "G-GT7S42H0BP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
export { db };
