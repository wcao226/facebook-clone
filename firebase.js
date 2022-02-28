import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAEt8iDW7zWEM8Ni9ZwsvaD9Cnj_6w6H54",
    authDomain: "facebook-clone-f4712.firebaseapp.com",
    projectId: "facebook-clone-f4712",
    storageBucket: "facebook-clone-f4712.appspot.com",
    messagingSenderId: "809777654531",
    appId: "1:809777654531:web:0787d85d5d330cacc79736"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };