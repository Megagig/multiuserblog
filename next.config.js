const config = require('./config');
const nextConfig = {
  env: {
    MONGODB_URI: config.MONGODB_URI,
    API: config.API,
  },
};
module.exports = nextConfig;
