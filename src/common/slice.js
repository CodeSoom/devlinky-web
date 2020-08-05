import { createSlice } from '@reduxjs/toolkit';

import fetchDevLinks from '../../services/api';

const { actions, reducer } = createSlice({
  name: 'devlink#',
  initialState: {
    devlinks: [],
  },
  reducers: {
    setDevLinks(state, { payload: devlinks }) {
      return {
        ...state,
        devlinks,
      };
    },
  },
});

export const {
  setDevLinks,
} = actions;

export function loadInitialData() {
  return async (dispatch) => {
    const devlinks = await fetchDevLinks();
    dispatch(setDevLinks(devlinks));
  };
}

export default reducer;
