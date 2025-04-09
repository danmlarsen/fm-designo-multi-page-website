import Image from 'next/image';

import ImageTalent from '@/assets/about/desktop/image-world-class-talent.jpg';
import ImageTalentTablet from '@/assets/about/tablet/image-world-class-talent.jpg';
import ImageTalentMobile from '@/assets/about/mobile/image-world-class-talent.jpg';
import SvgPatternTwoCircles from '@/assets/shared/desktop/bg-pattern-two-circles.svg';

export default function Talent() {
  return (
    <section className="grid lg:grid-cols-[476px_1fr] bg-muted md:rounded-lg overflow-hidden lg:h-[640px]">
      <div>
        <Image src={ImageTalentMobile} alt="World class talent" className="md:hidden object-cover w-full" />
        <Image src={ImageTalentTablet} alt="World class talent" className="hidden md:block lg:hidden object-cover w-full" />
        <Image src={ImageTalent} alt="World class talent" className="hidden lg:block object-cover w-full" />
      </div>
      <div className="flex flex-col justify-center px-6 lg:px-24 space-y-6 relative py-20 lg:py-0 text-center lg:text-left">
        <Image src={SvgPatternTwoCircles} alt="Background pattern" className="absolute -bottom-5 -left-35" />
        <h2 className="text-primary text-5xl font-medium">World-class talent</h2>
        <p>
          We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its
          given market. We are constantly updating our skills in a myriad of platforms.
        </p>
        <p>
          Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to
          craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story
          and mission.
        </p>
      </div>
    </section>
  );
}
