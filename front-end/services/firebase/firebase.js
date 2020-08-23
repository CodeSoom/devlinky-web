import * as firebase from 'firebase';

import config from '../../config/firebase';

firebase.initializeApp(config);

const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const githubOAuthLogin = () => firebase.auth().signInWithPopup(githubAuthProvider);
const githubOAuthLogout = () => firebase.auth().signOut();

export {
  firebase, githubAuthProvider, githubOAuthLogin, githubOAuthLogout,
};
