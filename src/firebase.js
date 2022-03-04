import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbKHwe_5LI3XereFDQm5jHmaXafM3o8fg",
  authDomain: "todo-81aea.firebaseapp.com",
  projectId: "todo-81aea",
  storageBucket: "todo-81aea.appspot.com",
  messagingSenderId: "14105877989",
  appId: "1:14105877989:web:47ba6c4c24bc1e5a62630c"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }