<<<<<<< HEAD
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "firebase.config";
import Footer from "components/Footer";
=======
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { firebaseConfig } from 'firebase.config'
import { Firestore, getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
>>>>>>> 3a9e3db8e3d2b59b1b8edecdd7d207a7c26735d2

export var db: Firestore;
export default function App({ Component, pageProps }: AppProps) {
<<<<<<< HEAD
  initializeApp(firebaseConfig);
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
=======
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  return <Component {...pageProps} />
>>>>>>> 3a9e3db8e3d2b59b1b8edecdd7d207a7c26735d2
}
