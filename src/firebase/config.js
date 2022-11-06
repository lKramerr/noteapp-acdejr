// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCP-oyBHG45bAn_eKX4LEc8u0uz8gylK0",
  authDomain: "noteapp-f401b.firebaseapp.com",
  projectId: "noteapp-f401b",
  storageBucket: "noteapp-f401b.appspot.com",
  messagingSenderId: "729368931631",
  appId: "1:729368931631:web:f322c0bd5f2d2cfdf545da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( app );
export const CloudFirebase = getFirestore( app );