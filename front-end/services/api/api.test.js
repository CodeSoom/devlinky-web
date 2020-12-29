import fetchDevLinks, { getDevLinks } from './api';

import { devLinks } from '../../../fixture/data';

jest.mock('../firebase/firebase.js');

describe('api', () => {
  const mockFetch = (data) => {
    global.fetch = jest.fn().mockResolvedValue({
      async json() { return data; },
    });
  };

  describe('fetchDevLinks', () => {
    beforeEach(() => {
      mockFetch(devLinks);
    });

    it('returns devLinks', async () => {
      const data = await fetchDevLinks();

      expect(data).toEqual(devLinks);
    });
  });

  describe('getDevLinks', () => {
    it('returns devLinks', async () => {
      const data = await getDevLinks();

      expect(data).toEqual(devLinks);
    });
  });
});
