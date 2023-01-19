import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCsM2m0gmCtKI3T_hUD1ENVurXyc2_7YQY",
    authDomain: "chats-6c42e.firebaseapp.com",
    projectId: "chats-6c42e",
    storageBucket: "chats-6c42e.appspot.com",
    messagingSenderId: "215663043924",
    appId: "1:215663043924:web:34c26badcf69f954f154c1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore(app)