
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9qKPTgO-RNfuKWs6Aj6IvMrrq7u7D6-w",
  authDomain: "react-course-21541.firebaseapp.com",
  projectId: "react-course-21541",
  storageBucket: "react-course-21541.appspot.com",
  messagingSenderId: "924227968468",
  appId: "1:924227968468:web:136936b0e40608c5564a41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore  = getFirestore(app)
export const auth = getAuth(app)
