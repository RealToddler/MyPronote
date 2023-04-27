// import { initializeApp, cert } from "firebase-admin/app";
// import { getFirelord, getFirestore, MetaTypeCreator } from "firelord";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const credentials = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT ?? "");
// credentials.private_key = credentials.private_key.replace(/\\n/gm, "\n");


// const app = initializeApp({
//     credential: cert(credentials),
// });
const credentials = {
    apiKey: "AIzaSyBGWHmnBysbNfhFjXJ2-A8BSn9U9M3rrNc",
    authDomain: "mypronote-27044.firebaseapp.com",
    projectId: "mypronote-27044",
    storageBucket: "mypronote-27044.appspot.com",
    messagingSenderId: "501536549682",
    appId: "1:501536549682:web:aa3072835b99e4f58c452b",
    measurementId: "G-GK93SFCLG5"
};
const app = initializeApp(credentials);

export const db = getFirestore(app);