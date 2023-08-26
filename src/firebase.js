 import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";
 import { getFirestore } from "firebase/firestore";
 import { getStorage } from "firebase/storage"; 

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

 // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage

export { app, auth, firestore, storage }; // Export the storage service
