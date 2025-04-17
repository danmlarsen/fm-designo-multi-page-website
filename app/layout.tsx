import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import CallToAction from './call-to-action';
import { Toaster } from '@/components/ui/sonner';
import FadeInOnScroll from '@/components/ui/fade-in-on-scroll';
import { FadeInProvider } from '@/context/fade-in-context';

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
        <FadeInProvider>
          <div className="min-h-screen grid grid-rows-[1fr_auto] mx-auto">
            <div className="max-w-7xl mx-auto w-full">
              <div className="flex flex-col justify-center h-24 md:py-16 px-6 md:px-10 sticky md:relative top-0 left-0 z-50 bg-white">
                <Header />
              </div>
              <main>{children}</main>
            </div>
            <div className="mt-40">
              <FadeInOnScroll id="cta">
                <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
                  <CallToAction />
                </div>
              </FadeInOnScroll>
              <div className="bg-foreground -mt-20 pt-36 pb-16">
                <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
          <Toaster />
        </FadeInProvider>
      </body>
    </html>
  );
}
