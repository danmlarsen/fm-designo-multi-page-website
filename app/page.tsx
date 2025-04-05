import Image from 'next/image';
import Designs from './designs';
import HeroAwardWinning from './hero-award-winning';

import SvgLeaf from '@/assets/shared/desktop/bg-pattern-leaf.svg';
import BulletpointIllustrations from './bulletpoint-illustrations';

export default function HomePage() {
  return (
    <>
      <Image src={SvgLeaf} alt="Leaf pattern" className="absolute top-[445px] left-0  -z-50" />
      <Image src={SvgLeaf} alt="Leaf pattern" className="absolute top-[1879px] right-0 rotate-180 -z-50" />
      <div className="space-y-40">
        <HeroAwardWinning />
        <div className="px-6">
          <Designs />
        </div>
        <div className="px-6">
          <BulletpointIllustrations />
        </div>
      </div>
    </>
  );
}
