import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAInnQAfM4DonekRAXLVGM6S9BQD7wp5Bo",
    authDomain: "react-prime-vb.firebaseapp.com",
    projectId: "react-prime-vb",
    storageBucket: "react-prime-vb.appspot.com",
    messagingSenderId: "782198840947",
    appId: "1:782198840947:web:76ae82c94f67cd67cc9406",
    measurementId: "G-E9JJC4QWW8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};

export default db;