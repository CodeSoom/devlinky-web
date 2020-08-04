import { fetchDevLinks } from './api';

import { devLinks } from '../fixture/data';

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
});
