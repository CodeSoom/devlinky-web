const config = require('./webpack.config');

module.exports = {
  ...config,
  mode: 'production',
  output: {
    ...config.output,
    publicPath: '/project-react-1-daadaadaah',
  },
};
