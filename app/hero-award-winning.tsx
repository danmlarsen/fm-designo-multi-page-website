import Image from 'next/image';

import ImageHeroPhone from '@/assets/home/desktop/image-hero-phone.png';
import SvgHeroPattern from '@/assets/home/desktop//bg-pattern-hero-home.svg';
import { Button } from '@/components/ui/button';

export default function HeroAwardWinning() {
  return (
    <div className="flex items-center px-24 bg-primary rounded-lg overflow-hidden h-[640px] text-white relative">
      <div>
        <h1 className="text-5xl font-medium max-w-lg mb-2.5">Award-winning custom designs and digital branding solutions</h1>
        <p className="max-w-md mb-10">
          With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out
          more about our services.
        </p>
        <Button>Learn More</Button>
      </div>
      <Image src={SvgHeroPattern} alt="Hero pattern" className="absolute top-0 right-0" />
      <Image src={ImageHeroPhone} alt="Image of a mobile phone" className="absolute -bottom-60 right-4" />
    </div>
  );
}
