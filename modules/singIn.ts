import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export async function singInAndGetToken(username: string, password: string){
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, `${username}@example.com`, password);
    const token = await userCredential.user?.getIdToken(true);
    console.log("Successfuly logged in");
    return token || "";
  } catch (error) {
    console.error(error);
    return "";
  };
};

// export function tryToRedirect() {
//   const nav = useNavigate();
//   nav("/");
// }