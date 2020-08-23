import { createSlice } from '@reduxjs/toolkit';

import fetchDevLinks from '../../services/api';

import { githubOAuthLogin } from '../../services/firebase/firebase';

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
  },
});

export const { setDevLinks, setAccessToken, setUserInfo } = actions;

export function loadInitialData() {
  return async (dispatch) => {
    const devLinks = await fetchDevLinks();
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

export default reducer;
