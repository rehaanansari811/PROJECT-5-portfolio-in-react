// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCS0MtpMzTzp5Kstd8oCet2vCOKcQrVbRE",
  authDomain: "rehaan-ansari-react-portfolio.firebaseapp.com",
  projectId: "rehaan-ansari-react-portfolio",
  storageBucket: "rehaan-ansari-react-portfolio.appspot.com",
  messagingSenderId: "316958230772",
  appId: "1:316958230772:web:b0f2bb334c63266259b6a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore()