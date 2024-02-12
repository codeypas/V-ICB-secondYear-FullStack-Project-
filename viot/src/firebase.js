// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "viot-bmsce.firebaseapp.com",
  projectId: "viot-bmsce",
  storageBucket: "viot-bmsce.appspot.com",
  messagingSenderId: "555175120033",
  appId: "1:555175120033:web:f25fb7dd7da12bdd29b4e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);