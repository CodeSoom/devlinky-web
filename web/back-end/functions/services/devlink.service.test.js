const devlinkService = require('./devlink.service');

const devlinkRepository = require('../repositories/devlink.repository');

jest.mock('../repositories/devlink.repository');

const { devLink } = require('../../../fixture/data');

delete devLink.id;

describe('devlinkService', () => {
  describe('create', () => {
    devlinkRepository.insert.mockResolvedValue(devLink);

    it('creates newDevlink', async () => {
      const result = await devlinkService.create(devLink);
      expect(devlinkRepository.insert).toBeCalledTimes(1);
    });
  });

  describe('readAll', () => {
    beforeEach(async () => {
      devlinkRepository.selectAll.mockResolvedValue([devLink]);
    });

    it('returns devlinks ', async () => {
      const devlinks = await devlinkService.readAll();

      expect(devlinks).toEqual([devLink]);
    });
  });
});
