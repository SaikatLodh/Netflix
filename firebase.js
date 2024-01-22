// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyDUoukD3sq_xHaCVkmoy4_oEIzx6pTDT6M",
  authDomain: "netflix-8056f.firebaseapp.com",
  projectId: "netflix-8056f",
  storageBucket: "netflix-8056f.appspot.com",
  messagingSenderId: "674108623644",
  appId: "1:674108623644:web:5566e3fbf6f1ebf9d588d9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);