import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADsHfpF-D7xfr_Cun3XNDlQUKmWQUbQHo",
  authDomain: "cafe-neon.firebaseapp.com",
  projectId: "cafe-neon",
  storageBucket: "cafe-neon.firebasestorage.app",
  messagingSenderId: "6554373993",
  appId: "1:6554373993:web:28fc2150736b3e7e4bb7f8",
  measurementId: "G-HW62JC0GF9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs };