import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBGWHmnBysbNfhFjXJ2-A8BSn9U9M3rrNc",
    authDomain: "mypronote-27044.firebaseapp.com",
    projectId: "mypronote-27044",
    storageBucket: "mypronote-27044.appspot.com",
    messagingSenderId: "501536549682",
    appId: "1:501536549682:web:aa3072835b99e4f58c452b",
    measurementId: "G-GK93SFCLG5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);