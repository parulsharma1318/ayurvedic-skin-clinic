import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs8pXyIhFeJTIBt3jsPyFYAtF_xHCYaZ4",
  authDomain: "shree-shyam-ayurveda.firebaseapp.com",
  projectId: "shree-shyam-ayurveda",
  storageBucket: "shree-shyam-ayurveda.firebasestorage.app",
  messagingSenderId: "437741055226",
  appId: "1:437741055226:web:e3588b1fd0063cfd5fed43",
  measurementId: "G-9L3C174JNQ"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);