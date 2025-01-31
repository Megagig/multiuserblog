import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@/models/user.models';
import bcryptjs from 'bcryptjs';
import dbConnect from '@/utils/dbConnect';

export const authOptions = {
  session: {
    strategy: 'jwt',
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        dbConnect();
        const { email, password } = credentials;
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('Invalid email or password');
        }
        //if the user has no password (i.e they signed up via a social network, throw an error)
        if (!user?.password) {
          throw new Error('Please login via the method you used to signup');
        }
        const isPasswordMatch = await bcryptjs.compare(
          password,
          user?.password
        );
        if (!isPasswordMatch) {
          throw new Error('Invalid email or password');
        }
        return user;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
};
