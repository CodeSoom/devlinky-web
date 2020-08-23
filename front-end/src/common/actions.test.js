import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import {
  loadInitialData,
  setDevLinks,
  login,
  setAccessToken,
  setUserInfo,
} from './slice';

const mockStore = configureStore(getDefaultMiddleware());

jest.mock('../../services/api');
jest.mock('../../services/firebase/firebase.js');

describe('actions', () => {
  let store;

  describe('loadInitialData', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setDevLinks', async () => {
      await store.dispatch(loadInitialData());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setDevLinks([]));
    });
  });

  describe('login', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    const mockAccessToken = {
      github: 'GITHUB_ACCESS_TOKEN',
      firebase: 'FIREBASE_ACCESS_TOKEN',
    };

    const mockUserInfo = {
      uid: 'devuid',
      email: 'dev@devlink.com',
      photoURL: 'https://some-new-url-here',
    };

    it('runs setAccessToken and setUserInfo', async () => {
      await store.dispatch(login());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setAccessToken(mockAccessToken));
      expect(actions[1]).toEqual(setUserInfo(mockUserInfo));
    });
  });
});
