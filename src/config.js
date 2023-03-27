import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAjhAmv5w3CO-LnBxu70XYvMny4XZU568A",
  authDomain: "registr-3a2fd.firebaseapp.com",
  projectId: "registr-3a2fd",
  storageBucket: "registr-3a2fd.appspot.com",
  messagingSenderId: "135852860097",
  appId: "1:135852860097:web:d8befbc2e366692b20ea40",
  measurementId: "G-3CKWCKZCV4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()