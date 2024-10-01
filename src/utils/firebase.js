// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHNzmnpgbmSzv41jfn39HLFmeEdPZIWvw",
  authDomain: "movstream-gpt.firebaseapp.com",
  projectId: "movstream-gpt",
  storageBucket: "movstream-gpt.appspot.com",
  messagingSenderId: "929423670509",
  appId: "1:929423670509:web:96d61e6ccc96c922aee0e4",
  measurementId: "G-4PJL8D29ZJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
