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

// const firebaseConfig = {




//   apiKey: "AIzaSyBe0nrf82PXlt7gFO1vasjYxlTGWvmbU7w",




//   authDomain: "nw1buzzstaff.firebaseapp.com",




//   projectId: "nw1buzzstaff",




//   storageBucket: "nw1buzzstaff.appspot.com",




//   messagingSenderId: "208460223530",




//   appId: "1:208460223530:web:e4da52dc554101efb85f53",




//   measurementId: "G-DPYRKG0833"




// };




const firebaseConfig = {

  apiKey: "AIzaSyA_RZRSh9SGriOaWnNE3kZNDwWfm3KwRkQ",

  authDomain: "buzzstaffwomen.firebaseapp.com",

  projectId: "buzzstaffwomen",

  storageBucket: "buzzstaffwomen.appspot.com",

  messagingSenderId: "844879114039",

  appId: "1:844879114039:web:afd6c08f94795c862134b2",

  measurementId: "G-73CF6KJRYP"

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