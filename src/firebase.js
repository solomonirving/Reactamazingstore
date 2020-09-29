import firebase from "firebase";

const firebaseApp =  firebase.initializeApp ({
    apiKey: "AIzaSyABwnJKSIQEEBRUyF1z6HQ1DzIRO6LGJf8",
    authDomain: "amazing-store-ef8bb.firebaseapp.com",
    databaseURL: "https://amazing-store-ef8bb.firebaseio.com",
    projectId: "amazing-store-ef8bb",
    storageBucket: "amazing-store-ef8bb.appspot.com",
    messagingSenderId: "256560813667",
    appId: "1:256560813667:web:90780bd1d9039dfb680a56",
    measurementId: "G-JM1F253330"
  });
  

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };