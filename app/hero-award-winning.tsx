import Image from 'next/image';

import ImageHeroPhone from '@/assets/home/desktop/image-hero-phone.png';
import SvgHeroPattern from '@/assets/home/desktop//bg-pattern-hero-home.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroAwardWinning() {
  return (
    <section className="flex items-center px-24 bg-primary rounded-lg overflow-hidden h-[640px] text-white relative">
      <div>
        <h1 className="text-5xl font-medium max-w-lg mb-2.5">Award-winning custom designs and digital branding solutions</h1>
        <p className="max-w-[445px] mb-10">
          With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out
          more about our services.
        </p>
        <Button asChild>
          <Link href="/about">Learn More</Link>
        </Button>
      </div>
      <Image src={SvgHeroPattern} alt="Hero pattern" className="absolute top-0 -right-3" />
      <Image src={ImageHeroPhone} alt="Image of a mobile phone" className="absolute -bottom-60 right-4" />
    </section>
  );
}
