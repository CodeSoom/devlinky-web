const devlinkRepository = require('./devlink.repository');

const { devLink } = require('../../fixture/data');

delete devLink.id;

const mockQueryResponse = jest.fn();
mockQueryResponse.mockReturnValue(devLink);

jest.mock('firebase-admin', () => ({
  initializeApp: jest.fn().mockImplementation(() => jest.fn()),
  firestore: jest.fn().mockImplementation(() => ({
    collection: jest.fn().mockImplementation(() => {
      return {
        get: jest.fn().mockResolvedValue([
          {
            id: 1,
            data: jest.fn().mockImplementation(() => {
              return mockQueryResponse;
            }),
          },
        ]),
        add: jest.fn().mockResolvedValue({}),
      };
    }),
  })),
  credential: {
    cert: jest.fn().mockImplementation(() => jest.fn()),
  },
}));

describe('devlink.repository', () => {
  describe('create', () => {
    it('inserts devlink to devlink collection', async () => {
      const result = await devlinkRepository.insert(devLink);
      expect(result).toEqual(devLink);
    });
  });

  describe('findAll', () => {
    it('returns devlinks', async () => {
      const foundDevlinks = await devlinkRepository.selectAll();
      expect(foundDevlinks).toHaveLength(1);
    });
  });
});
