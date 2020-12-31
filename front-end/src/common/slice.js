import { createSlice } from '@reduxjs/toolkit';

import { getDevLinks, getUsers, addUser } from '../../services/api/api';

import {
  githubOAuthLogin,
  githubOAuthLogout,
} from '../../services/firebase/firebase';

import { saveItem, removeItem } from '../../services/storage/localStorage';

import {
  getUniqArray, getPropertysFromObjects, joinObj1sAndObj2s,
} from './utils';

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

    const devLinks = joinObj1sAndObj2s(tempDevLinks, 'firstDevLinkerUid', tempDevLinkers, 'uid', 'firstDevLinker');

    dispatch(setDevLinks(devLinks));
  };
}

export const signUp = (userInfo) => async (dispatch) => {
  await addUser(userInfo);

  saveItem('currentUser', JSON.stringify(userInfo));

  dispatch(setUserInfo(userInfo));
};

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

    const userInfo = {
      uid: response.user.uid,
      githubId: response.additionalUserInfo.profile.login,
      githubProfile: response.user.photoURL,
    };

    dispatch(signUp(userInfo));
  };
}

export const logout = () => async (dispatch) => {
  removeItem('accessToken');

  await githubOAuthLogout();
  dispatch(resetAccessToken());
  dispatch(resetUserInfo());
};

export default reducer;
