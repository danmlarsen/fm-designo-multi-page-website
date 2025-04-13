import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import CallToAction from './call-to-action';

const jostSans = Jost({
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
      <body className={`${jostSans.className} antialiased scroll-smooth`}>
        <div className="min-h-screen grid grid-rows-[1fr_auto] mx-auto">
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col justify-center h-24 md:py-16 px-6 md:px-10 sticky md:relative top-0 left-0 z-50 bg-white">
              <Header />
            </div>
            <main>{children}</main>
          </div>
          <div className="mt-40">
            <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
              <CallToAction />
            </div>
            <div className="bg-foreground -mt-20 pt-36 pb-16">
              <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">
                <Footer />
              </div>
            </div>
          </div>
        </div>
        <div id="mobile-menu-button-root" className="z-[1000000] h-screen" />
      </body>
    </html>
  );
}
