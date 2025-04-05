import ImageAboutUs from '@/assets/about/desktop/image-about-hero.jpg';
import ImageAboutUsTablet from '@/assets/about/tablet/image-about-hero.jpg';
import ImageAboutUsMobile from '@/assets/about/mobile/image-about-hero.jpg';
import SvgHeroPattern from '@/assets/about/desktop/bg-pattern-hero-about-desktop.svg';

import Image from 'next/image';

export default function HeroAboutUs() {
  return (
    <section className="grid lg:grid-cols-[1fr_476px] lg:h-[480px] bg-primary md:rounded-lg overflow-hidden text-white text-center lg:text-left">
      <div className="lg:order-2">
        <Image src={ImageAboutUs} alt="About us image" className="hidden lg:block" />
        <Image src={ImageAboutUsTablet} alt="About us image" className="hidden md:block lg:hidden w-full object-cover" />
        <Image src={ImageAboutUsMobile} alt="About us image" className="md:hidden w-full object-cover h-[320px]" />
      </div>
      <div className="flex px-4 md:px-24 flex-col justify-center space-y-8 relative py-20">
        <Image src={SvgHeroPattern} alt="Hero pattern" className="absolute right-0 -bottom-8 hidden md:block" />
        <h1 className="text-5xl font-medium">About Us</h1>
        <p>
          Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and
          nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that
          connect with our clients’ audiences.
        </p>
      </div>
    </section>
  );
}
