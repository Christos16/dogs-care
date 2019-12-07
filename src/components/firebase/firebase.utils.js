import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBhm044-hyprXjw7vr-g49KTBTs3Pim2T8',
  authDomain: 'dogs-care.firebaseapp.com',
  databaseURL: 'https://dogs-care.firebaseio.com',
  projectId: 'dogs-care',
  storageBucket: 'dogs-care.appspot.com',
  messagingSenderId: '671039400998',
  appId: '1:671039400998:web:b0cf6dd888c4ffd95a4ae7'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.id}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
      console.log(userRef);
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
