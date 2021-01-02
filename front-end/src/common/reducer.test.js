import reducer, {
  setDevLinks,
  setAccessToken,
  setUserInfo,
  resetAccessToken,
  resetUserInfo,
  setDevLinkerInfo,
} from './slice';

import { devLink, user, accessToken } from '../../../fixture/data';

jest.mock('../../services/firebase/firebase.js');

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      devLinks: [],
      accessToken: null,
      userInfo: null,
      devLinkerInfo: null,
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
        setAccessToken(accessToken),
      );

      expect(state.accessToken).toEqual(accessToken);
    });
  });

  describe('setUserInfo', () => {
    it('set userInfo', () => {
      const initialState = {
        accessToken: null,
        userInfo: null,
      };

      const state = reducer(initialState, setUserInfo(user));

      expect(state.userInfo).toEqual(user);
    });
  });

  describe('resetAccessToken', () => {
    it('reset accessToken', () => {
      const initialState = {
        accessToken,
        userInfo: user,
      };

      const state = reducer(initialState, resetAccessToken());

      expect(state.accessToken).toEqual(null);
    });
  });

  describe('resetUserInfo', () => {
    it('reset userInfo', () => {
      const initialState = {
        accessToken,
        userInfo: user,
      };

      const state = reducer(initialState, resetUserInfo());

      expect(state.userInfo).toEqual(null);
    });
  });

  describe('setDevLinkerInfo', () => {
    it('reset devLinkerInfo', () => {
      const initialState = {
        accessToken,
        devLinkerInfo: null,
      };

      const state = reducer(initialState, setDevLinkerInfo(user));

      expect(state.devLinkerInfo).toEqual(user);
    });
  });
});
