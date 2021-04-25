import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBa1vQ9kUGDRHvND7NwOJdppwe157cLF7Y",
    authDomain: "svelt-project.firebaseapp.com",
    projectId: "svelt-project",
    storageBucket: "svelt-project.appspot.com",
    messagingSenderId: "561724077337",
    appId: "1:561724077337:web:1424dd6e4998abdb174188",
    measurementId: "G-BT9W7EM11M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();