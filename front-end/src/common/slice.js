import { createSlice } from '@reduxjs/toolkit';

import { getDevLinks, getUsers } from '../../services/api/api';

import {
  githubOAuthLogin,
  githubOAuthLogout,
} from '../../services/firebase/firebase';

import { saveItem, removeItem } from '../../services/storage/localStorage';

import { getMapToArray, getUniqArray, getPropertysFromObjects } from './utils';

const { actions, reducer } = createSlice({
  name: 'devLink#',
  initialState: {
    devLinks: [],
    accessToken: null,
    userInfo: null,
  },
  reducers: {
    setDevLinks(state, { payload: devLinks }) {
      return {
        ...state,
        devLinks,
      };
    },
    setAccessToken(state, { payload: accessToken }) {
      return {
        ...state,
        accessToken,
      };
    },
    setUserInfo(state, { payload: userInfo }) {
      return {
        ...state,
        userInfo,
      };
    },
    resetAccessToken(state) {
      return {
        ...state,
        accessToken: null,
      };
    },
    resetUserInfo(state) {
      return {
        ...state,
        userInfo: null,
      };
    },
  },
});

export const {
  setDevLinks,
  setAccessToken,
  setUserInfo,
  resetAccessToken,
  resetUserInfo,
} = actions;

export function loadInitialData() {
  return async (dispatch) => {
    const tempDevLinks = await getDevLinks();

    const firstDevLinkerUids = getPropertysFromObjects(tempDevLinks, 'firstDevLinkerUid');

    const uniquefirstDevLinkerUids = getUniqArray(firstDevLinkerUids);

    const tempDevLinkers = await getUsers(uniquefirstDevLinkerUids);

    const devLinkers = getMapToArray(tempDevLinkers, 'uid');

    const devLinks = tempDevLinks.map((item) => ({
      ...item,
      firstDevLinker: devLinkers.get(item.firstDevLinkerUid),
    }));

    dispatch(setDevLinks(devLinks));
  };
}

export function login() {
  return async (dispatch) => {
    const response = await githubOAuthLogin();

    const firebaseUserIdToken = await response.user.getIdToken(true);

    const accessToken = {
      github: response.credential.accessToken,
      firebase: firebaseUserIdToken,
    };

    saveItem('accessToken', {
      github: response.credential.accessToken,
      firebase: firebaseUserIdToken,
    });

    dispatch(setAccessToken(accessToken));

    const { uid, email, photoURL } = response.user;

    const userInfo = {
      uid, // TODO : 토큰 관리 방법 논의 후 삭제 고려
      email,
      photoURL,
    };

    dispatch(setUserInfo(userInfo));
  };
}

export const logout = () => async (dispatch) => {
  removeItem('accessToken');

  await githubOAuthLogout();
  dispatch(resetAccessToken());
  dispatch(resetUserInfo());
};

export default reducer;
