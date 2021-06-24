import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBV0eIMHh_baWqpE3CFNW8_zFO1tZYrgJ8",
  authDomain: "e-commerce-app-db-ff959.firebaseapp.com",
  projectId: "e-commerce-app-db-ff959",
  storageBucket: "e-commerce-app-db-ff959.appspot.com",
  messagingSenderId: "38221787495",
  appId: "1:38221787495:web:889e70bcbaf9d27d2cbfc2",
  measurementId: "G-62Z71BGW0V"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;