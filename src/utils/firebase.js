// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDV4cG4rPtpJE6-o9jWxDD1SyvVNzetV4s",
    authDomain: "todo-test-v2.firebaseapp.com",
    projectId: "todo-test-v2",
    storageBucket: "todo-test-v2.appspot.com",
    messagingSenderId: "1091191966945",
    appId: "1:1091191966945:web:93775077df7255c2db7ba0",
    measurementId: "G-J55B7KK997"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export default db
