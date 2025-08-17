// src/firebase.js
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  projectId: "warian-enterprises"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)