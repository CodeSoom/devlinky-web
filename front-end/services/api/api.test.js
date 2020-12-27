import { fetchDevLinks, addUser } from './api';

import { devLinks, signupInfo } from '../../../fixture/data';

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

  describe('signUp', () => {
    it('returns signupInfo', async () => {
      const data = await addUser({
        firebaseUid: 'responseId',
        githubId: 'githubId',
        githubProfile: 'githubProfile',
      });

      expect(data).toEqual(signupInfo);
    });
  });
});
