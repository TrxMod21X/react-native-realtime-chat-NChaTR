import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBj37Ox8Me1BDpNuz20vosbjqFE3LDAqgA',
  authDomain: 'nchatrx.firebaseapp.com',
  databaseURL: 'https://nchatrx.firebaseio.com',
  projectId: 'nchatrx',
  storageBucket: 'nchatrx.appspot.com',
  messagingSenderId: '128185504436',
  appId: '1:128185504436:web:2dcd4bb17c8b9221373de1',
  measurementId: 'G-240LEQDRMR'
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export { firebase };
export default db;
