import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCHcCzYTzdWAuGQcuF67vRHfMJCeT7OM1M",
  authDomain: "rick-and-morty-fff1d.firebaseapp.com",
  projectId: "rick-and-morty-fff1d",
  storageBucket: "rick-and-morty-fff1d.appspot.com",
  messagingSenderId: "898548582904",
  appId: "1:898548582904:web:e90f997bd507029694ee0d",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
