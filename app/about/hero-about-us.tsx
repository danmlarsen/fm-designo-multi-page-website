import ImageAboutUs from "@/assets/about/desktop/image-about-hero.jpg";
import ImageAboutUsTablet from "@/assets/about/tablet/image-about-hero.jpg";
import ImageAboutUsMobile from "@/assets/about/mobile/image-about-hero.jpg";
import SvgHeroPattern from "@/assets/about/desktop/bg-pattern-hero-about-desktop.svg";

import Image from "next/image";

export default function HeroAboutUs() {
  return (
    <section className="bg-primary grid overflow-hidden text-center text-white md:rounded-lg lg:h-[30rem] lg:grid-cols-[1fr_29.75rem] lg:text-left">
      <div className="lg:order-2">
        <Image
          src={ImageAboutUs}
          alt="About us image"
          className="hidden lg:block"
        />
        <Image
          src={ImageAboutUsTablet}
          alt="About us image"
          className="hidden w-full object-cover md:block lg:hidden"
        />
        <Image
          src={ImageAboutUsMobile}
          alt="About us image"
          className="h-[20rem] w-full object-cover md:hidden"
        />
      </div>
      <div className="relative flex flex-col justify-center space-y-8 px-4 py-20 md:px-24">
        <Image
          src={SvgHeroPattern}
          alt="Hero pattern"
          className="absolute right-0 -bottom-8 hidden md:block"
        />
        <h1 className="text-5xl font-medium">About Us</h1>
        <p>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
    </section>
  );
}
