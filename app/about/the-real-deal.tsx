import ImageRealDeal from '@/assets/about/desktop/image-real-deal.jpg';
import SvgPatternTwoCircles from '@/assets/shared/desktop/bg-pattern-two-circles.svg';

import Image from 'next/image';

export default function TheRealDeal() {
  return (
    <section className="grid grid-cols-[1fr_476px] bg-secondary rounded-lg overflow-hidden h-[640px]">
      <div className="flex flex-col justify-center px-24 space-y-6 relative">
        <Image src={SvgPatternTwoCircles} alt="Background pattern" className="absolute -bottom-5 right-10" />
        <h2 className="text-primary text-5xl font-medium">The real deal</h2>
        <p>
          As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to
          measure success.
        </p>
        <p>
          We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and
          drive real results.
        </p>
      </div>
      <div>
        <Image src={ImageRealDeal} alt="The Real Deal" />
      </div>
    </section>
  );
}
