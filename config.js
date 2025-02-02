const MONGODB_URI =
  process.env.NODE_ENV === 'production'
    ? 'mongodb://megagig:overcomer@46.202.140.97:27017/multiuserblog?authSource=admin'
    : 'mongodb://megagig:overcomer@46.202.140.97:27017/multiuserblog?authSource=admin';
const API =
  process.env.NODE_ENV === 'production'
    ? 'https://xxx.vercel.app/api'
    : 'http://localhost:3000/api';

const NEXTAUTH_SECRET = 'AJKDJFJSKDKLKEHE2893774038JKJJCSLFLLF';

const GOOGLE_CLENT_ID =
  '271474645285-badhrle295n3bulgr429jbbl4c8lbum4.apps.googleusercontent.com';

const GOOGLE_CLENT_SECRET = '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';

module.exports = {
  MONGODB_URI,
  API,
  NEXTAUTH_SECRET,
  GOOGLE_CLENT_ID,
  GOOGLE_CLENT_SECRET,
};

// "mongodb://megagig:overcomer@46.202.140.97:27017/multiuserblog?authSource=admin"
