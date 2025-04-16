import LocationSection from '@/components/location-section';
import HeroAboutUs from './hero-about-us';
import Talent from './talent';
import TheRealDeal from './the-real-deal';
import Image from 'next/image';

import SvgLeaf from '@/assets/shared/desktop/bg-pattern-leaf.svg';
import FadeInOnScroll from '@/components/ui/fade-in-on-scroll';

export default function AboutPage() {
  return (
    <>
      <Image src={SvgLeaf} alt="Leaf pattern" className="absolute top-[445px] left-0  -z-50 hidden lg:block" />
      <Image src={SvgLeaf} alt="Leaf pattern" className="absolute top-[1879px] right-0 rotate-180 -z-50 hidden lg:block" />
      <div className="md:space-y-40 md:px-10">
        <FadeInOnScroll id="hero-about-us">
          <HeroAboutUs />
        </FadeInOnScroll>

        <FadeInOnScroll id="talent">
          <Talent />
        </FadeInOnScroll>
        <div className="my-32 md:my-40">
          <FadeInOnScroll id="location-section">
            <LocationSection />
          </FadeInOnScroll>
        </div>
        <FadeInOnScroll id="the-real-deal">
          <TheRealDeal />
        </FadeInOnScroll>
      </div>
    </>
  );
}
