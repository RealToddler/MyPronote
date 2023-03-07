import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function signIn(username: string, password: string): Promise<boolean> {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      `${username}@example.com`,
      password
    );
    const token = await userCredential.user?.getIdToken(true);
    console.log(`Token: ${token}`);
  } catch (error) {
    console.error(error);
    return false;
  }
  return true;
}
