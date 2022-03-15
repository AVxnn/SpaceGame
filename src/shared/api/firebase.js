
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC3qmIHtFNr_Tv8fuc-C15110fz8KR05TU",
    authDomain: "spacegame-96752.firebaseapp.com",
    projectId: "spacegame-96752",
    storageBucket: "spacegame-96752.appspot.com",
    messagingSenderId: "250911115952",
    appId: "1:250911115952:web:e17cb272fbc80078be8975",
    measurementId: "G-YJ2MY57R14"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()