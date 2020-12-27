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
  additionalUserInfo: {
    profile: {
      login: 'githubId',
    },
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

const response = {
  id: 'responseId',
};

const responseWhereGet = {
  querySnapshot: {
    docs: [1],
  },
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
    collection: jest.fn().mockImplementation(() => ({
      get: jest.fn().mockResolvedValue([]),
      where: jest.fn().mockImplementation(() => ({
        get: jest.fn().mockResolvedValue(responseWhereGet),
      })),
      add: jest.fn().mockResolvedValue(response),
      doc: jest.fn().mockImplementation(() => ({
        set: jest.fn().mockResolvedValue(response),
      })),
    })),
  })),
};

const db = firebase.firestore();

export {
  config, githubOAuthLogin, githubOAuthLogout, firebase, db,
};
