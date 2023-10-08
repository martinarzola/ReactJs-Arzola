import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { getFirestore } from 'firebase/firestore'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvLCAZil1aP-w_jejo-D2CoDB3CKGBU7U",
  authDomain: "fir-reactjs-97c7f.firebaseapp.com",
  projectId: "fir-reactjs-97c7f",
  storageBucket: "fir-reactjs-97c7f.appspot.com",
  messagingSenderId: "239367677970",
  appId: "1:239367677970:web:e733fa06590ed90cfb90cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
