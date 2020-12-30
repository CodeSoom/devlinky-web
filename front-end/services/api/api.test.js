import { getDevLinks, getUsers } from './api';

import { devLinks, users } from '../../../fixture/data';

jest.mock('../firebase/firebase.js');

describe('api', () => {
  describe('getDevLinks', () => {
    it('returns devLinks', async () => {
      const data = await getDevLinks();

      expect(data).toEqual(devLinks);
    });
  });

  describe('getUsers', () => {
    const uniqueUserUids = users.map((item) => item.uid);

    it('returns devLinkers', async () => {
      const data = await getUsers(uniqueUserUids);

      expect(data).toEqual(users);
    });
  });
});
