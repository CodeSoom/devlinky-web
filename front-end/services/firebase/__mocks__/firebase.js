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

const githubOAuthLogin = () => new Promise((resolve) => resolve(mockResponse));

const githubOAuthLogout = jest.fn();

const firebase = {
  auth: () => ({
    GithubAuthProvider: new Promise((resolve) => resolve()),
    signInWithPopup: () => new Promise((resolve) => resolve(mockResponse)),
    signOut: () => new Promise((resolve) => resolve()),
  }),
};

export {
  config, githubOAuthLogin, githubOAuthLogout, firebase,
};
