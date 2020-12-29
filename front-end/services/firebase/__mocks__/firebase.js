import { devLinks } from '../../../../fixture/data';

const mockResponse = {
  credential: {
    accessToken: 'GITHUB_ACCESS_TOKEN',
  },
  user: {
    uid: 'devuid',
    email: 'dev@devlink.com',
    photoURL: 'https://some-new-url-here',
    getIdToken: jest.fn().mockResolvedValue('FIREBASE_ACCESS_TOKEN'),
  },
};

const config = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  databaseURL: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

const collections = {
  devlink: devLinks,
};

const githubOAuthLogin = () => new Promise((resolve) => resolve(mockResponse));

const githubOAuthLogout = jest.fn();

const firebase = {
  auth: () => ({
    GithubAuthProvider: new Promise((resolve) => resolve()),
    signInWithPopup: () => new Promise((resolve) => resolve(mockResponse)),
    signOut: () => new Promise((resolve) => resolve()),
  }),
  firestore: jest.fn().mockImplementation(() => ({
    collection: jest.fn().mockImplementation((name) => ({
      get: jest.fn().mockResolvedValue({
        docs: collections[name].map((item) => ({
          id: item.id,
          data: () => item,

        })),
      }),
    })),
  })),

};

const db = firebase.firestore();

export {
  config, githubOAuthLogin, githubOAuthLogout, firebase, db,
};
