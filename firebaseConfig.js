// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJimTraGiv8q6M5VAvIAcc1E5ih5kKzJY",
  authDomain: "taskmanagerapp-28dc5.firebaseapp.com",
  projectId: "taskmanagerapp-28dc5",
  storageBucket: "taskmanagerapp-28dc5.firebasestorage.app",
  messagingSenderId: "526101229337",
  appId: "1:526101229337:web:56d2b22fc6d11bd0ec1f88",
  measurementId: "G-3DPR5WHBLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
const analytics = getAnalytics(app);

export { db };