const config = require('./config');
const nextConfig = {
  env: {
    MONGODB_URI: config.MONGODB_URI,
    API: config.API,
    NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,
  },
};
module.exports = nextConfig;
