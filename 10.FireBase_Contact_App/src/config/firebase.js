// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "vite-contact-app-f128f.firebaseapp.com",
  projectId: "vite-contact-app-f128f",
  storageBucket: "vite-contact-app-f128f.appspot.com",
  messagingSenderId: "520575728560",
  appId: "1:520575728560:web:66894622417e0c9c127475"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) ;