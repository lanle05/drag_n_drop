// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpAnBlxi8MemwtM-4nmRusaefltg1Vdl8",
  authDomain: "drag-n-drop-5fb86.firebaseapp.com",
  projectId: "drag-n-drop-5fb86",
  storageBucket: "drag-n-drop-5fb86.appspot.com",
  messagingSenderId: "435413654323",
  appId: "1:435413654323:web:b02ed4d4970b7ea0777c46",
  measurementId: "G-YX9NWXTVF3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw error;
  }
};

export { auth };