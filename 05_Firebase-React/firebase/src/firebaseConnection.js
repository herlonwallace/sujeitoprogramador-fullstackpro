import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBZAw8KkADdwgihKLACZB2QatRfePoe54I",
    authDomain: "curso-2e9cd.firebaseapp.com",
    projectId: "curso-2e9cd",
    storageBucket: "curso-2e9cd.appspot.com",
    messagingSenderId: "211884861330",
    appId: "1:211884861330:web:9bdbc69d1f0422195c834b",
    measurementId: "G-GS9Z3NVKPV"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp)

  export { db }