// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDklJPxAHQvFFnmRkwazJ8bdtnWJSIf9ZQ",
  authDomain: "inventory-management-6c137.firebaseapp.com",
  projectId: "inventory-management-6c137",
  storageBucket: "inventory-management-6c137.appspot.com",
  messagingSenderId: "765842677285",
  appId: "1:765842677285:web:07741a3312c749ab6de9cc",
  measurementId: "G-6R223YGBSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);


export {firestore}