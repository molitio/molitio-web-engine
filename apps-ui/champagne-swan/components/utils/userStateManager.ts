import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeFirebase } from "./firebase";

const { firebaseApp } = initializeFirebase();

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

const signIn = async () => {
  const result = await signInWithPopup(auth, provider);
  if (result.user) {
    const { displayName, email, uid } = result.user;
    console.log({ displayName, email, uid });

    await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "Alice",
        email: "hello@email.com",
        secretHash: "secret",
      }),
    });
  }
};

const signOut = async () => {
  auth.signOut();
};

export { signIn, signOut, auth };
