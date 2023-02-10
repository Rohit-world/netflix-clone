import { initializeApp } from 'firebase/app';
import firebase from"firebase"

const firebaseConfig = {
    apiKey: "",
    authDomain: "netflix-roh.firebaseapp.com",
    projectId: "netflix-roh",
    storageBucket: "netflix-roh.appspot.com",
    messagingSenderId: "646115462154",
    appId: "1:646115462154:web:5317680263159b0f9da3f3"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db=firebaseApp.firestore()
  const auth=firebase.auth()
  export{auth}
  export default  db
