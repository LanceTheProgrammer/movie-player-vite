// Importing necessary functions and modules from Firebase
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// Importing toast for displaying notifications
import { toast } from "react-toastify";

// Firebase configuration object containing API keys and project details

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflix-clone-31d87.firebaseapp.com",
  projectId: "netflix-clone-31d87",
  storageBucket: "netflix-clone-31d87.appspot.com",
  messagingSenderId: "448178405910",
  appId: "1:448178405910:web:34046d5969fc98bf8d2b37",
};

// Initializing Firebase app with the configuration object
const app = initializeApp(firebaseConfig);

// Initializing Firebase authentication and database instances
const auth = getAuth(app);  // Authentication instance
const db = getFirestore(app);  // Firestore database instance

// Function for user signup
const signup = async (name, email, password) => {
  try {
    // Creating user with email and password
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Adding user data to Firestore collection
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    // Displaying error message using toast notification
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Function for user login
const login = async (email, password) => {
  try {
    // Signing in user with email and password
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    // Displaying error message using toast notification
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

// Function for user logout
const logout = () => {
  // Signing out current user
  signOut(auth);
};

// Exporting authentication, database, login, signup, and logout functions
export { auth, db, login, signup, logout };
