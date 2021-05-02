import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCd01s84cuAK1cTGqPKPk2gMJMj18wY3NM",
    authDomain: "crwn-db-39b1e.firebaseapp.com",
    projectId: "crwn-db-39b1e",
    storageBucket: "crwn-db-39b1e.appspot.com",
    messagingSenderId: "275470846642",
    appId: "1:275470846642:web:f30f412fb2ab81065117ab",
    measurementId: "G-YWWYHTR5FC"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
