import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBzkVstkJcEAApTIXM_JttbML0yTt3L34I",
    authDomain: "crwn-db-ad474.firebaseapp.com",
    projectId: "crwn-db-ad474",
    storageBucket: "crwn-db-ad474.appspot.com",
    messagingSenderId: "413612570211",
    appId: "1:413612570211:web:6bfd2495a56c9c5d29ea56",
    measurementId: "G-V9C6PNJQHT"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.messsage);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;