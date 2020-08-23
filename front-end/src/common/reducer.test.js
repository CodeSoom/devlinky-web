import reducer, { setDevLinks, setAccessToken, setUserInfo } from './slice';

import { devLink } from '../../../fixture/data';

jest.mock('../../services/firebase/firebase.js');

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      devLinks: [],
      accessToken: null,
      userInfo: null,
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setDevLinks', () => {
    it('set devLinks', () => {
      const initialState = {
        devLinks: [],
        accessToken: null,
        userInfo: null,
      };

      const state = reducer(initialState, setDevLinks(devLink));

      expect(state.devLinks).toEqual(devLink);
    });
  });

  describe('setAccessToken', () => {
    it('set accessToken', () => {
      const initialState = {
        accessToken: null,
        userInfo: null,
      };

      const state = reducer(
        initialState,
        setAccessToken({
          github: 'GITHUB_ACCESS_TOKEN',
          firebase: 'FIREBASE_ACCESS_TOKEN',
        }),
      );

      expect(state.accessToken).toEqual({
        github: 'GITHUB_ACCESS_TOKEN',
        firebase: 'FIREBASE_ACCESS_TOKEN',
      });
    });
  });

  describe('setUserInfo', () => {
    it('set userInfo', () => {
      const initialState = {
        accessToken: null,
        userInfo: null,
      };

      const userInfo = {
        uid: 'uid',
        email: 'email',
        photoURL: 'photoURL',
      };

      const state = reducer(initialState, setUserInfo(userInfo));

      expect(state.userInfo).toEqual(userInfo);
    });
  });
});
