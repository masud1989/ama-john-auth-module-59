// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwDyr-PYRa3DiPjWLvwEb2SGsK-GAt7jI",
  authDomain: "ama-jphn-simple-auth.firebaseapp.com",
  projectId: "ama-jphn-simple-auth",
  storageBucket: "ama-jphn-simple-auth.appspot.com",
  messagingSenderId: "1071331731385",
  appId: "1:1071331731385:web:9ee98d1da691ce4ca97868"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;