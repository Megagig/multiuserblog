MONGOBD_URI =
  'mongodb://megagig:overcomer@46.202.140.97:27017/multiuserblog?authSource=admin';

const API =
  process.env.NODE_ENV === 'production'
    ? 'https://xxx.vercel.app/api'
    : 'http://localhost:3000/api';

module.exports = {
  MONGOBD_URI,
  API,
};
