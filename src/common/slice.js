import { createSlice } from '@reduxjs/toolkit';

import fetchDevLinks from '../../services/api';

const { actions, reducer } = createSlice({
  name: 'devLink#',
  initialState: {
    accessToken: '',
    userInfo: null,
    devLinks: [],
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

export const {
  setDevLinks,
  setAccessToken,
  setUserInfo,
} = actions;

export function loadInitialData() {
  return async (dispatch) => {
    const devLinks = await fetchDevLinks();
    dispatch(setDevLinks(devLinks));
  };
}

export default reducer;
