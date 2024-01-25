// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "viot-d23d4.firebaseapp.com",
  projectId: "viot-d23d4",
  storageBucket: "viot-d23d4.appspot.com",
  messagingSenderId: "589752463567",
  appId: "1:589752463567:web:d1ad91a4fb3bf876be47ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);