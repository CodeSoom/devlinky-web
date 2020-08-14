import reducer, { setDevLinks, setAccessToken, setUserInfo } from './slice';

import { devLink, userInfo } from '../../fixture/data';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      accessToken: '',
      userInfo: null,
      devLinks: [],
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setDevLinks', () => {
    it('set devLinks', () => {
      const initialState = {
        accessToken: '',
        userInfo: null,
        devLinks: [],
      };

      const state = reducer(initialState, setDevLinks(devLink));

      expect(state.devLinks).toEqual(devLink);
    });
  });

  describe('setAccessToken', () => {
    it('set accessToken', () => {
      const initialState = {
        accessToken: '',
        userInfo: null,
        devLinks: [],
      };

      const state = reducer(initialState, setAccessToken('ACCESS_TOKEN'));

      expect(state.accessToken).toEqual('ACCESS_TOKEN');
    });
  });

  describe('setUserInfo', () => {
    it('set userInfo', () => {
      const initialState = {
        accessToken: '',
        userInfo: null,
        devLinks: [],
      };

      const state = reducer(initialState, setUserInfo(userInfo));

      expect(state.userInfo).toEqual(userInfo);
    });
  });
});
