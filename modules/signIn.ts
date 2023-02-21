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
<<<<<<< HEAD:modules/signIn.ts
};
=======
};
>>>>>>> b68bb6a9080ede4b847a6efb1d5fe19cad6fe3ce:modules/singIn.ts
