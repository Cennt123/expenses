import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCR9QTFKYbYqsVENCRWuF5KtjLs6PVjTpk",

  authDomain: "expensess-3d210-b0b5e.firebaseapp.com",

  projectId: "expensess-3d210",

  storageBucket: "expensess-3d210.appspot.com",

  messagingSenderId: "605230266912",

  appId: "1:605230266912:web:ed1d2f69c19d98d6409a45"

};




initializeApp(firebaseConfig);

const db = getFirestore();
export default db