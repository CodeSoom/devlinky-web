import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

import config from '../../../config/firebase';

firebase.initializeApp(config);

const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const githubOAuthLogin = () => firebase.auth().signInWithPopup(githubAuthProvider);
const githubOAuthLogout = () => firebase.auth().signOut();

const db = firebase.firestore();

export {
  firebase, githubAuthProvider, githubOAuthLogin, githubOAuthLogout, db,
};
