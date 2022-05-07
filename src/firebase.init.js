// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqOCdPKDOVOLk14-7FYGfZJYWYlVfoARw",
    authDomain: "eleven-assignment-work.firebaseapp.com",
    projectId: "eleven-assignment-work",
    storageBucket: "eleven-assignment-work.appspot.com",
    messagingSenderId: "874269390855",
    appId: "1:874269390855:web:07bb40d4e7d48a0825d2a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;