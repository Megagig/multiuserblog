'use client';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from '@/components/nav/TopNav';
import { ThemeProvider } from '@/context/theme';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

// export const metadata = {
//   title: 'Next.js Ecommerce',
//   description: 'Next.js Ecommerce site',
//   image: 'https://via.placeholder.com/150',
//   url: 'https://nextjs-ecommerce.vercel.app',
// };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <ThemeProvider>
          <body>
            <Toaster />
            <TopNav />
            {children}
          </body>
        </ThemeProvider>
      </SessionProvider>
    </html>
  );
}
