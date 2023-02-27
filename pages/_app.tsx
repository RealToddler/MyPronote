import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "firebase.config";
import '../styles/globals.css'
import { Firestore, getFirestore } from 'firebase/firestore'

export let db: Firestore;
export default function App({ Component, pageProps }: AppProps) {
  initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  return <Component {...pageProps} />
}
