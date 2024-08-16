// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCif4ybeThMtSalkJvPAzMwv9r6aSGXd5E",
  authDomain: "dragon-news-auth-c91fa.firebaseapp.com",
  projectId: "dragon-news-auth-c91fa",
  storageBucket: "dragon-news-auth-c91fa.appspot.com",
  messagingSenderId: "1096508893132",
  appId: "1:1096508893132:web:d7324c645b43ed4fc8df69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
