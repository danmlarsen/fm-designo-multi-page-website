import Image from 'next/image';

import ImageTalent from '@/assets/about/desktop/image-world-class-talent.jpg';
import SvgPatternTwoCircles from '@/assets/shared/desktop/bg-pattern-two-circles.svg';

export default function Talent() {
  return (
    <section className="grid grid-cols-[476px_1fr] bg-secondary rounded-lg overflow-hidden h-[640px]">
      <div>
        <Image src={ImageTalent} alt="World class talent" />
      </div>
      <div className="flex flex-col justify-center px-24 space-y-6 relative">
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
