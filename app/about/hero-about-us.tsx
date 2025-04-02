import ImageAboutUs from '@/assets/about/desktop/image-about-hero.jpg';
import SvgHeroPattern from '@/assets/about/desktop/bg-pattern-hero-about-desktop.svg';

import Image from 'next/image';

export default function HeroAboutUs() {
  return (
    <section className="grid grid-cols-[1fr_476px] h-[480px] bg-primary rounded-lg overflow-hidden text-white">
      <div className="flex px-24 flex-col justify-center space-y-8 relative">
        <Image src={SvgHeroPattern} alt="Hero pattern" className="absolute right-0 -bottom-8" />
        <h1 className="text-5xl font-medium">About Us</h1>
        <p>
          Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and
          nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that
          connect with our clients’ audiences.
        </p>
      </div>
      <div>
        <Image src={ImageAboutUs} alt="About us image" />
      </div>
    </section>
  );
}
