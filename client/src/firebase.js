// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "onchain-blog.firebaseapp.com",
  projectId: "onchain-blog",
  storageBucket: "onchain-blog.firebasestorage.app",
  messagingSenderId: "304421714824",
  appId: "1:304421714824:web:ee4d293c48bada2df2d83d",
  measurementId: "G-KT7L2NDGNE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
