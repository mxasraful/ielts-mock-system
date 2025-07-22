// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_EyCekR0F8lBOVMq3KqdOwtz7OYfyKGQ",
  authDomain: "ieltsmock-d8b4b.firebaseapp.com",
  projectId: "ieltsmock-d8b4b",
  storageBucket: "ieltsmock-d8b4b.firebasestorage.app",
  messagingSenderId: "604670802001",
  appId: "1:604670802001:web:de772f65b2563e33922070",
  measurementId: "G-56SSZ784CW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
