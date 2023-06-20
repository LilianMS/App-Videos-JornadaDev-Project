import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZi-hSFlosNWuiS6TXagqJzG0FYEcekFE",
  authDomain: "tiktok-jornada-381de.firebaseapp.com",
  projectId: "tiktok-jornada-381de",
  storageBucket: "tiktok-jornada-381de.appspot.com",
  messagingSenderId: "954303548248",
  appId: "1:954303548248:web:4556949a8aac2e909c732d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;