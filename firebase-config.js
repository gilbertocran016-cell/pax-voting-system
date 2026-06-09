// Firebase Initialization - PAX Elections 2026
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDocs, deleteDoc, onSnapshot, updateDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBODx37FkcxfK3Ku2he-6KzXf1r2OjNyFg",
  authDomain: "pax-elections-2026.firebaseapp.com",
  projectId: "pax-elections-2026",
  storageBucket: "pax-elections-2026.firebasestorage.app",
  messagingSenderId: "216406695161",
  appId: "1:216406695161:web:e234c8771abdbacc50d628",
  measurementId: "G-EKMTMH8X7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firebase functions to window for global access
window.db = db;
window.fbCollection = collection;
window.fbDoc = doc;
window.fbSetDoc = setDoc;
window.fbGetDocs = getDocs;
window.fbDeleteDoc = deleteDoc;
window.fbOnSnapshot = onSnapshot;
window.fbUpdateDoc = updateDoc;
window.fbServerTimestamp = serverTimestamp;

console.log("🔥 Firebase initialized successfully");
