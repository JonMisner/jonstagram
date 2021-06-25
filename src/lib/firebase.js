import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCKNxZmjROgzlMb_ExPc_EDmxQY-rSW5n8',
  authDomain: 'jonstagram-cb171.firebaseapp.com',
  projectId: 'jonstagram-cb171',
  storageBucket: 'jonstagram-cb171.appspot.com',
  messagingSenderId: '747917398260',
  appId: '1:747917398260:web:947c10af87bfaaa71b8ea1'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// call seed file
// seedDatabase(firebase);

export { firebase, FieldValue };
