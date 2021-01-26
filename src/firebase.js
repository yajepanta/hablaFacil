import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAnB6qeNWrDEZCD3myHa92WkkMS1FilWG8",
    authDomain: "hablafacilapp-20c5a.firebaseapp.com",
    projectId: "hablafacilapp-20c5a",
    storageBucket: "hablafacilapp-20c5a.appspot.com",
    messagingSenderId: "1062852859493",
    appId: "1:1062852859493:web:192d737e54054dbfa8188c",
    measurementId: "G-X84WQ1NF7C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;