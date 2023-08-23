import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWSPXvalSf3Xtinqgm4d0JkkuBnDyOw14",
  authDomain: "movie-app-616fa.firebaseapp.com",
  databaseURL:
    "https://movie-app-616fa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "movie-app-616fa",
  storageBucket: "movie-app-616fa.appspot.com",
  messagingSenderId: "405560525707",
  appId: "1:405560525707:web:16fdaed4519db15042e58e",
  measurementId: "G-DH63571P2P",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Firestore
const firestore = getFirestore(app);

export { app, analytics, auth, firestore };
