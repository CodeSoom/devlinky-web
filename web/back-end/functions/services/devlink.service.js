const devlinkRepository = require('../repositories/devlink.repository');

const devlinkService = {
  async create(newDevlink) {
    const result = await devlinkRepository.insert(newDevlink);
    return result;
  },
  async readAll() {
    const devlinks = await devlinkRepository.selectAll();
    return devlinks;
  },
};

module.exports = devlinkService;
