// Import the functions you need from the SDKs you need
// import * as firebase from "firebase/app";
// // Import the functions you need from the SDKs you need
// import * as auth from "firebase/auth";
import firebase from 'firebase'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADYnBXz6bxbN5bw9XmcnlkLyNaUX0HY5E",
  authDomain: "buzz-staffw.firebaseapp.com",
  projectId: "buzz-staffw",
  storageBucket: "buzz-staffw.appspot.com",
  messagingSenderId: "430227515546",
  appId: "1:430227515546:web:55f1b1222c792a484a5723",
  measurementId: "G-7NF7SPSCGC"
};

// Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const auths = firebaseApp.auth();
// const provider = new auth.GoogleAuthProvider();

// export { auths, provider };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
