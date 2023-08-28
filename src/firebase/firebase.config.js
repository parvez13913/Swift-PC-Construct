import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA6Rr_cHJq7DlrpX0xecTsuK7tXqaNKeuA",
    authDomain: "book-verse-85eb9.firebaseapp.com",
    projectId: "book-verse-85eb9",
    storageBucket: "book-verse-85eb9.appspot.com",
    messagingSenderId: "603985090331",
    appId: "1:603985090331:web:802f900d6784bf2df765be"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;