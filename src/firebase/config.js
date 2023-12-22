// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAKG9TIXkKu6Th5RL5Xx7ODvTgXTkNdDI0',
  authDomain: 'react-cursos-799d1.firebaseapp.com',
  projectId: 'react-cursos-799d1',
  storageBucket: 'react-cursos-799d1.appspot.com',
  messagingSenderId: '43145525924',
  appId: '1:43145525924:web:d28ba3228f69ec4f454431',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
