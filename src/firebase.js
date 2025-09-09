// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANGiNJdWAIW2aOqxIKwPZF9B5q1dwP3qM",
  authDomain: "college-maintenance-gehu.firebaseapp.com",
  projectId: "college-maintenance-gehu",
  storageBucket: "college-maintenance-gehu.firebasestorage.app",
  messagingSenderId: "460280524038",
  appId: "1:460280524038:web:05606b43a6c821a08ec287",
  measurementId: "G-Y4N5MF4CYL"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);       // Firestore database
const auth = getAuth(app);           // Firebase Authentication
const storage = getStorage(app);     // Firebase Storage

// Export the initialized services for use in the app
export { app, db, auth, storage };
