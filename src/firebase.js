
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCegWpZ0F_J0RXn19jr0u0Ak2D_dyXSnr4",
  authDomain: "chat1-d40a8.firebaseapp.com",
  projectId: "chat1-d40a8",
  storageBucket: "chat1-d40a8.appspot.com",
  messagingSenderId: "516326470221",
  appId: "1:516326470221:web:735aa5f48e144cbfee6204"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
export  const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();