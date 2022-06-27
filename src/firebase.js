// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBYYo_KS-8Wnay9Yu4xsyUhGHyICWW1vkc",
  authDomain: "clone-react-63f94.firebaseapp.com",
  projectId: "clone-react-63f94",
  storageBucket: "clone-react-63f94.appspot.com",
  messagingSenderId: "1095242902903",
  appId: "1:1095242902903:web:4a6f4bae18dd2cd98b8572",
  measurementId: "G-8BG8VP3WYB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };