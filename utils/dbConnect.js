// const mongoose = require('mongoose');

// // Function to connect to MongoDB
// const connectDB = async (url) => {
//   try {
//     await mongoose.connect(url, {});
//     console.log('Connected to MongoDB successfully');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1); // Terminate the app if the connection fails
//   }
// };

// module.exports = connectDB;

import mongoose from 'mongoose';
const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log('Already connected to MongoDB');
    return;
  }
  mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB successfully');
};
export default dbConnect;
