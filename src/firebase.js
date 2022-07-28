import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB_YFlFR5EsOKTjh8w4JF3IblOg-XD9On4",
  authDomain: "whatsapp-firebase-mj.firebaseapp.com",
  projectId: "whatsapp-firebase-mj",
  storageBucket: "whatsapp-firebase-mj.appspot.com",
  messagingSenderId: "752122338378",
  appId: "1:752122338378:web:5a8c07a13ea82e6dc69ab3"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firebase()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db