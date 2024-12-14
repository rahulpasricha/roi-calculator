// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration (the one you shared earlier)
const firebaseConfig = {
  apiKey: "AIzaSyCTNI8ZOfSVRFm1w_V2kgVKlIfuMQoLFyc",
  authDomain: "roi-calculator-5c4a4.firebaseapp.com",
  projectId: "roi-calculator-5c4a4",
  storageBucket: "roi-calculator-5c4a4.firebasestorage.app",
  messagingSenderId: "484775728997",
  appId: "1:484775728997:web:02fcfea46b9f568418338c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);