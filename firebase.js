// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2DeFs72ZwwX7aBPFjjzfQ_TIsWvNi9kA",
  authDomain: "fb-clone-347d3.firebaseapp.com",
  projectId: "fb-clone-347d3",
  storageBucket: "fb-clone-347d3.appspot.com",
  messagingSenderId: "579196860393",
  appId: "1:579196860393:web:53f9efe8509964ae11bd78"

};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
