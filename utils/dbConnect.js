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
