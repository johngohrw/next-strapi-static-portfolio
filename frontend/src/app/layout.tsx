import type { Metadata } from 'next';
import { Asar, Fraunces, Gentium_Book_Plus } from 'next/font/google';
import './globals.css';

const inter = Gentium_Book_Plus({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[inter.className, 'min-h-screen relative'].join(' ')}>
        {children}
      </body>
    </html>
  );
}
