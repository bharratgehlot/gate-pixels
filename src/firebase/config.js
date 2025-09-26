
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj6ZxzIXBvUlf4DxLvBzhLq0Goy869KKY",
  authDomain: "gate-pixels.firebaseapp.com",
  projectId: "gate-pixels",
  storageBucket: "gate-pixels.firebasestorage.app",
  messagingSenderId: "1088262251625",
  appId: "1:1088262251625:web:8e2c5dd0b0bfe1cd37aef8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);