import {getAuth} from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZpIZHdFf9EUVU8EgvIOZgmXAJo-hJm_o",
  authDomain: "project-sun-shine-8d7a9.firebaseapp.com",
  projectId: "project-sun-shine-8d7a9",
  storageBucket: "project-sun-shine-8d7a9.appspot.com",
  messagingSenderId: "116076838777",
  appId: "1:116076838777:web:1ad946aba15475f9af39a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;