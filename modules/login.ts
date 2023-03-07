import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function signIn(username: string, password: string) {
  let succesfullLogin = false;
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      `${username}@example.com`,
      password
    );
    const token = await userCredential.user?.getIdToken(true);
    console.log(`Token: ${token}`);
    succesfullLogin = true;
  } catch (error) {
    console.error(error);
  }
  return succesfullLogin;
}
