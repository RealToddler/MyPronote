import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function signInAndGetToken(username: string, password: string){
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