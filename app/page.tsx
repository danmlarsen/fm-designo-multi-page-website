import Image from 'next/image';
import Designs from '../components/designs-section';
import HeroAwardWinning from './hero-award-winning';

import SvgLeaf from '@/assets/shared/desktop/bg-pattern-leaf.svg';
import BulletpointIllustrations from './bulletpoint-illustrations';
import FadeInOnScroll from '@/components/ui/fade-in-on-scroll';

export default function HomePage() {
  return (
    <>
      <Image src={SvgLeaf} alt="Leaf pattern" className="absolute top-[445px] left-0  -z-50 hidden lg:block" />
      <Image src={SvgLeaf} alt="Leaf pattern" className="absolute top-[1879px] right-0 rotate-180 -z-50 hidden lg:block" />
      <div className="space-y-40">
        <div className="md:px-10">
          <FadeInOnScroll id="hero-award-winning">
            <HeroAwardWinning />
          </FadeInOnScroll>
        </div>
        <div className="px-6 md:px-10 space-y-40">
          <FadeInOnScroll id="designs">
            <Designs />
          </FadeInOnScroll>

          <FadeInOnScroll id="bulletpoint-illustrations">
            <BulletpointIllustrations />
          </FadeInOnScroll>
        </div>
      </div>
    </>
  );
}
