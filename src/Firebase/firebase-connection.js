// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtvdKwrlPBg1yXcl-66tlBqDLp1n4_A8g",
  authDomain: "nagarpalika-demo.firebaseapp.com",
  projectId: "nagarpalika-demo",
  storageBucket: "nagarpalika-demo.appspot.com",
  messagingSenderId: "715125580808",
  appId: "1:715125580808:web:44b57c97b1c5eb6e091dbd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);