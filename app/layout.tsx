import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import GetInTouch from './get-in-touch';

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
        <div className="min-h-screen grid grid-rows-[1fr_auto]">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="py-16">
              <Header />
            </div>
            <main>{children}</main>
          </div>
          <div>
            <div className="max-w-6xl mx-auto px-6 w-full">
              <GetInTouch />
            </div>
            <div className="bg-foreground -mt-20 pt-36 pb-16">
              <div className="max-w-6xl mx-auto px-6 w-full">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
