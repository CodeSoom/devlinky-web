import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import {
  loadInitialData,
  setDevLinks,
} from './slice';

const mockStore = configureStore(getDefaultMiddleware());

jest.mock('../../services/api');

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
});
