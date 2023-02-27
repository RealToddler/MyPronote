import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function signIn(username: string, password: string){
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, `${username}@example.com`, password);
    const token = await userCredential.user?.getIdToken(true);
    console.log(`Token: ${token}`);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  };
};
