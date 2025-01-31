const MONGODB_URI =
  process.env.NODE_ENV === 'production'
    ? 'mongodb://megagig:overcomer@46.202.140.97:27017/multiuserblog?authSource=admin'
    : 'mongodb://megagig:overcomer@46.202.140.97:27017/multiuserblog?authSource=admin';
const API =
  process.env.NODE_ENV === 'production'
    ? 'https://xxx.vercel.app/api'
    : 'http://localhost:3000/api';

NEXTAUTH_SECRET = 'AJKDJFJSKDKLKEHE2893774038JKJJCSLFLLF';

module.exports = {
  MONGODB_URI,
  API,
};

// "mongodb://megagig:overcomer@46.202.140.97:27017/multiuserblog?authSource=admin"
