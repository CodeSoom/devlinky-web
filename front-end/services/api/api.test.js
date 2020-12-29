import { getDevLinks } from './api';

import { devLinks } from '../../../fixture/data';

jest.mock('../firebase/firebase.js');

describe('api', () => {
  describe('getDevLinks', () => {
    it('returns devLinks', async () => {
      const data = await getDevLinks();

      expect(data).toEqual(devLinks);
    });
  });
});
