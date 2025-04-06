import Image from 'next/image';

import ImageHeroPhone from '@/assets/home/desktop/image-hero-phone.png';
import SvgHeroPattern from '@/assets/home/desktop//bg-pattern-hero-home.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroAwardWinning() {
  return (
    <section className="flex flex-col items-center justify-center bg-primary md:rounded-lg overflow-hidden lg:h-[640px] text-white relative pt-20">
      <Image src={SvgHeroPattern} alt="Hero pattern" className="absolute top-0 -right-3" />
      <div className="text-center px-4 lg:px-24 z-10">
        <h1 className="text-3xl md:text-5xl font-medium max-w-lg mb-2.5">Award-winning custom designs and digital branding solutions</h1>
        <p className="max-w-[445px] mb-10">
          With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out
          more about our services.
        </p>
        <Button asChild>
          <Link href="/about">Learn More</Link>
        </Button>
      </div>
      <div className="relative h-[450px] w-full overflow-x-clip">
        <Image src={ImageHeroPhone} alt="Image of a cell-phone" className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] max-w-none" />
      </div>
    </section>
  );
}
