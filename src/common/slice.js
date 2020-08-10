import { createSlice } from '@reduxjs/toolkit';

import fetchDevLinks from '../../services/api';

const { actions, reducer } = createSlice({
  name: 'devLink#',
  initialState: {
    devLinks: [],
  },
  reducers: {
    setDevLinks(state, { payload: devLinks }) {
      return {
        ...state,
        devLinks,
      };
    },
  },
});

export const {
  setDevLinks,
} = actions;

export function loadInitialData() {
  return async (dispatch) => {
    const devLinks = await fetchDevLinks();
    dispatch(setDevLinks(devLinks));
  };
}

export default reducer;
