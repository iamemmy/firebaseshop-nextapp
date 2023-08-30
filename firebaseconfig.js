import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAPLtpXGFW_BGKhtC697UDSq6XZE7_2dc",
  authDomain: "vite-chat-7e652.firebaseapp.com",
  projectId: "vite-chat-7e652",
  storageBucket: "vite-chat-7e652.appspot.com",
  messagingSenderId: "445298344363",
  appId: "1:445298344363:web:01f4bc6321e8741a1e92ee",
  measurementId: "G-5FDTWQWM2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {app, db, storage};