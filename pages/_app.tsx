import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "firebase.config";
import Footer from "components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  initializeApp(firebaseConfig);
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
