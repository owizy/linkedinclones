
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import{getFirestore}from"firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBUrq6dioBMY_pptFMDcFhvz1WX_qKDf9w",
  authDomain: "linkedinclone-a6913.firebaseapp.com",
  projectId: "linkedinclone-a6913",
  storageBucket: "linkedinclone-a6913.appspot.com",
  messagingSenderId: "470303165434",
  appId: "1:470303165434:web:c0a929cc45db44d760f243",
  measurementId: "G-RMV82MF5CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const goggleProvider = new GoogleAuthProvider();
export  const db = getFirestore(app);
