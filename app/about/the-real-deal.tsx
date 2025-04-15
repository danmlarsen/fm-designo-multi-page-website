import ImageRealDeal from '@/assets/about/desktop/image-real-deal.jpg';
import ImageRealDealTablet from '@/assets/about/tablet/image-real-deal.jpg';
import ImageRealDealMobile from '@/assets/about/mobile/image-real-deal.jpg';

import SvgPatternTwoCircles from '@/assets/shared/desktop/bg-pattern-two-circles.svg';

import Image from 'next/image';

export default function TheRealDeal() {
  return (
    <section className="grid lg:grid-cols-[1fr_476px] bg-muted md:rounded-lg overflow-hidden lg:h-[640px]">
      <div className="lg:order-2">
        <Image src={ImageRealDealMobile} alt="The Real Deal" className="md:hidden object-cover w-full" />
        <Image src={ImageRealDealTablet} alt="The Real Deal" className="hidden md:block lg:hidden object-cover w-full" />
        <Image src={ImageRealDeal} alt="The Real Deal" className="hidden lg:block object-cover w-full" />
      </div>
      <div className="flex flex-col justify-center px-6 lg:px-24 space-y-6 relative py-20 lg:py-0 text-center lg:text-left">
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
    </section>
  );
}
