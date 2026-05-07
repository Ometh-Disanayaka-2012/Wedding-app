// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRpiAWnDoUOcBKODLLiJUSzWRheDPVjCM",
  authDomain: "wedding-app-f9bd2.firebaseapp.com",
  projectId: "wedding-app-f9bd2",
  storageBucket: "wedding-app-f9bd2.firebasestorage.app",
  messagingSenderId: "480878783619",
  appId: "1:480878783619:web:75ce4d901ebf9831f2bfb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);