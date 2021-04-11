import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import {
  loadInitialData,
  setDevLinks,
  login,
  setAccessToken,
  setUserInfo,
  logout,
  resetAccessToken,
  resetUserInfo,
  signUp,
  loadDevLinkerInfo,
  setDevLinkerInfo,
} from './slice';

import { user } from '../../../../fixture/data';

const mockStore = configureStore(getDefaultMiddleware());

jest.mock('.././services/api/api');
jest.mock('.././services/firebase/firebase.js');

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

    it('runs setAccessToken and setUserInfo', async () => {
      await store.dispatch(login());

      const actions = store.getActions();

      expect(actions[0]).toEqual(setAccessToken(mockAccessToken));
      expect(actions[1]).toEqual(setUserInfo(user));
    });
  });

  describe('logout', () => {
    beforeEach(() => {
      store = mockStore({
        accessToken: {
          github: 'GITHUB_ACCESS_TOKEN',
          firebase: 'FIREBASE_ACCESS_TOKEN',
        },
        userInfo: user,
      });
    });

    it('runs setAccessToken and setUserInfo', async () => {
      await store.dispatch(logout());

      const actions = store.getActions();

      expect(actions[0]).toEqual(resetAccessToken());
      expect(actions[1]).toEqual(resetUserInfo());
    });
  });

  describe('signUp', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setUserInfo', async () => {
      await store.dispatch(signUp(user));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setUserInfo(user));
    });
  });

  describe('loadDevLinkerInfo', () => {
    beforeEach(() => {
      store = mockStore({});
    });

    it('runs setUserInfo', async () => {
      await store.dispatch(loadDevLinkerInfo({ devLinkerGithubId: user.githubId }));

      const actions = store.getActions();

      expect(actions[0]).toEqual(setDevLinkerInfo(user));
    });
  });
});
