import type { Metadata } from "next";
import { Jost } from "next/font/google";

import "./globals.css";
import { FadeInProvider } from "@/context/fade-in-context";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import CallToAction from "./call-to-action";
import FadeInOnScroll from "@/components/ui/fade-in-on-scroll";

const jostSans = Jost({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Designo",
  description: "Designo multi page website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jostSans.className} scroll-smooth antialiased`}>
        <FadeInProvider>
          <div className="mx-auto grid min-h-screen grid-rows-[1fr_auto]">
            <div className="mx-auto w-full max-w-7xl">
              <div className="sticky top-0 left-0 z-50 flex h-24 flex-col justify-center bg-white px-6 md:relative md:px-10 md:py-16">
                <Header />
              </div>
              <main>{children}</main>
            </div>
            <div className="mt-40">
              {/* <FadeInOnScroll id="cta"> */}
              <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
                <CallToAction />
              </div>
              {/* </FadeInOnScroll> */}
              <div className="bg-foreground -mt-20 pt-36 pb-16">
                <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
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
