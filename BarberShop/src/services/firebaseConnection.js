import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDRp1cxNJRdE_QHXpWP2QlXvHJoxpOTnAg",
    authDomain: "ibank-b7241.firebaseapp.com",
    projectId: "ibank-b7241",
    storageBucket: "ibank-b7241.appspot.com",
    messagingSenderId: "709394481989",
    appId: "1:709394481989:web:04a5f4c7795a597461f42c"
  };

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase
    