
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBiT7AxMwQ-Y1jHtWcPJbVXQ46izsTHgDQ",
    authDomain: "clone-28163.firebaseapp.com",
    projectId: "clone-28163",
    storageBucket: "clone-28163.firebasestorage.app",
    messagingSenderId: "596781072672",
    appId: "1:596781072672:web:ac935f40b2dcd7e4d0d745",
    measurementId: "G-7CWBPRHKJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore(app)

export const provider = new GoogleAuthProvider()