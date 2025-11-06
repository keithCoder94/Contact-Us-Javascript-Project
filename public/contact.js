// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
 apiKey: "AIzaSyAkD1Zget_dJcv3X7wUqglvBIqpH9g2kps",
    authDomain: "mobiapp-46924.firebaseapp.com",
    projectId: "mobiapp-46924",
    storageBucket: "mobiapp-46924.firebasestorage.app",
    messagingSenderId: "562192397370",
    appId: "1:562192397370:web:2507d021b97022f90fb103",
    measurementId: "G-KWZV2P1Q9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Select form elements
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    subject: form.subject.value.trim(),
    message: form.message.value.trim(),
    timestamp: serverTimestamp(),
  };

  try {
    // Save form data to Firestore
    await addDoc(collection(db, "contactQueries"), formData);

    successMessage.textContent = "✅ Message sent successfully!";
    form.reset();
  } catch (error) {
    console.error("Error sending message:", error);
    successMessage.textContent = "❌ Failed to send message.";
  }
});
