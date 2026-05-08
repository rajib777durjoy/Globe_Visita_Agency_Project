// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBXQiZWRteZ8-M4G91VWom-7PtnFVd3fM",
  authDomain: "travelagency-d6214.firebaseapp.com",
  projectId: "travelagency-d6214",
  storageBucket: "travelagency-d6214.firebasestorage.app",
  messagingSenderId: "338108391462",
  appId: "1:338108391462:web:bb33acbad9f2c0f6b106e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);