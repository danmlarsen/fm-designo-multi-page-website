import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';

const jostSans = Jost({
  variable: '--font-jost-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Designo',
  description: 'Designo multi page website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jostSans.variable} antialiased`}>
        <main className="min-h-screen grid place-items-center bg-slate-800 text-white">{children}</main>
      </body>
    </html>
  );
}
