import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDWyIGkDCEr4fF7yLlu_m5D38oUolS3OdU",
    authDomain: "joliskokassa-f29c3.firebaseapp.com",
    projectId: "joliskokassa-f29c3",
    storageBucket: "joliskokassa-f29c3.appspot.com",
    messagingSenderId: "800313661956",
    appId: "1:800313661956:web:03c21e2ad802687ee87351",
    measurementId: "G-J13DN3JSY9"
  };

  firebase.initializeApp(config);

  export const firestore = firebase.firestore();
  export const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;