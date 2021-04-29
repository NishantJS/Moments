import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const app=firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

export const auth = app.auth();
export const firestore = app.firestore();
export const serverStore = firebase.firestore.FieldValue;

export function useAuthHook() {
  const [user,loading, error] = useAuthState(auth);
  return [user, loading, error];
};

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
};

