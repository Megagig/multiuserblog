'use client';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from '@/components/nav/TopNav';
import { ThemeProvider } from '@/context/theme';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <TopNav />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
