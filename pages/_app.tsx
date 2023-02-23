import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { firebaseConfig } from 'firebase.config'
import { Firestore, getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

export var db: Firestore;
export default function App({ Component, pageProps }: AppProps) {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  return <Component {...pageProps} />
}
