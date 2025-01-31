import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/user.models';
import bcryptjs from 'bcryptjs';
import dbConnect from '@/utils/dbConnect';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connectDB();
        const { email, password } = credentials;
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('User not found');
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
          throw new Error('Invalid password');
        }
        return user;
      },
    }),
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: '/login',
    error: '/login',
    verifyRequest: '/login',
    verifyRequest: '/login',
    signOut: '/login',
    error: '/login',
    error: '/login',
  },
};
