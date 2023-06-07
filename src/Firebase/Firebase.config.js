// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log(import.meta.env.VITE_APIKEY);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
//   apiKey: "AIzaSyBtmLCn1WJfS0ixI8WHIEOllya1vSEvhyA",
//   authDomain: "enthusiast-academy.firebaseapp.com",
//   projectId: "enthusiast-academy",
//   storageBucket: "enthusiast-academy.appspot.com",
//   messagingSenderId: "724232124431",
//   appId: "1:724232124431:web:99ca232669ffb267420b7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;