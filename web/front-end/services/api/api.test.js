import {
  getDevLinks, getUsers, addUser, getUser,
} from './api';

import { devLinks, users, user } from '../../../../fixture/data';

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

  describe('addUser', () => {
    it('returns user', async () => {
      const data = await addUser(user);

      expect(data).toEqual(user);
    });
  });

  describe('getUser', () => {
    it('returns user', async () => {
      const data = await getUser({ githubId: user.githubId });

      expect(data).toEqual(user);
    });
  });
});
