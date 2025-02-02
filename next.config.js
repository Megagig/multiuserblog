const config = require('./config');
const nextConfig = {
  env: {
    MONGODB_URI: config.MONGODB_URI,
    API: config.API,
    NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,
    GOOGLE_CLENT_ID: config.GOOGLE_CLENT_ID,
    GOOGLE_CLENT_SECRET: config.GOOGLE_CLENT_SECRET,
  },
};
module.exports = nextConfig;
