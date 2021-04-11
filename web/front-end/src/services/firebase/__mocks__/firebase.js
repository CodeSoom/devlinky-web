import { devLinks, users, user } from '../../../../../../fixture/data';

const mockResponse = {
  credential: {
    accessToken: 'GITHUB_ACCESS_TOKEN',
  },
  user: {
    uid: user.uid,
    photoURL: user.githubProfile,
    getIdToken: jest.fn().mockResolvedValue('FIREBASE_ACCESS_TOKEN'),
  },
  additionalUserInfo: {
    profile: {
      login: user.githubId,
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

const collections = {
  devlink: devLinks,
  user: users,
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
      where: jest.fn().mockImplementation((fieldName, operator, value) => {
        let result = null;

        if (operator === '==') {
          result = ({
            get: jest.fn().mockResolvedValue({
              docs: collections[name]
                .filter((doc) => doc[fieldName] === value)
                .map((doc) => ({
                  id: doc.uid,
                  data: () => doc,
                })),
            }),
          });
        }

        if (operator === 'in') {
          result = ({
            get: jest.fn().mockResolvedValue({
              docs: collections[name].map((item) => ({
                id: item.uid,
                data: () => item,
              })),
            }),
          });
        }

        return result;
      }),
      doc: jest.fn().mockImplementation((docName) => ({
        get: jest.fn().mockResolvedValue({
          id: docName,
          data: () => collections[name].find((data) => data.uid === docName),
        }),
        set: jest.fn().mockResolvedValue({}),
      })),
    })),
  })),
};

const db = firebase.firestore();

export {
  config, githubOAuthLogin, githubOAuthLogout, firebase, db,
};
