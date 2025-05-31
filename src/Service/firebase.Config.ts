// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDasP3CfXn6T8PZR0tSRz6GRjVFSfPQ7do",
    authDomain: "next-calculator-7b76b.firebaseapp.com",
    projectId: "next-calculator-7b76b",
    storageBucket: "next-calculator-7b76b.firebasestorage.app",
    messagingSenderId: "782101535575",
    appId: "1:782101535575:web:25daf72332791d2cdcbc12",
    measurementId: "G-XG5JH90CD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);