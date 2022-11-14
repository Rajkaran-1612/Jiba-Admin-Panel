// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgAxTctvKwO4gbyisDqEoOL-RbH9d9RMA",
  authDomain: "jiba-0.firebaseapp.com",
  projectId: "jiba-0",
  storageBucket: "jiba-0.appspot.com",
  messagingSenderId: "338831974566",
  appId: "1:338831974566:web:5df330dd69bb51567f9467",
  measurementId: "G-G1R21DQE5Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

