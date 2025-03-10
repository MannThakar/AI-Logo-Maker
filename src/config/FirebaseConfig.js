// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, initializeFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "logo-maker-d110e.firebaseapp.com",
  projectId: "logo-maker-d110e",
  storageBucket: "logo-maker-d110e.firebasestorage.app",
  messagingSenderId: "1047003179233",
  appId: "1:1047003179233:web:a67de316c73e7ac47befa0",
};

// Initialize Firebase

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore with experimental settings (if needed)
initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

// Firestore instance
export const db = getFirestore(app);
