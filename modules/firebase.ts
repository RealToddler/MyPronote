import { initializeApp, cert } from "firebase-admin/app";
import { getFirelord, getFirestore, MetaTypeCreator } from "firelord";

const credentials = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT ?? "");
credentials.private_key = credentials.private_key.replace(/\\n/gm, "\n");


const app = initializeApp({
    credential: cert(credentials),
});

const db = getFirestore(app);