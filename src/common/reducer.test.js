import reducer, { setDevLinks } from './slice';

import { devLink } from '../../fixture/data';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      devlinks: [],
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setDevLinks', () => {
    it('set devLinks', () => {
      const initialState = {
        devlinks: [],
      };

      const state = reducer(initialState, setDevLinks(devLink));

      expect(state.devlinks).toEqual(devLink);
    });
  });
});
