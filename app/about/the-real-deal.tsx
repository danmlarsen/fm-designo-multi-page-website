import Image from "next/image";

import ImageRealDeal from "@/assets/about/desktop/image-real-deal.jpg";
import ImageRealDealTablet from "@/assets/about/tablet/image-real-deal.jpg";
import ImageRealDealMobile from "@/assets/about/mobile/image-real-deal.jpg";
import SvgPatternTwoCircles from "@/assets/shared/desktop/bg-pattern-two-circles.svg";

export default function TheRealDeal() {
  return (
    <section className="bg-muted grid overflow-hidden md:rounded-lg lg:h-[40rem] lg:grid-cols-[1fr_29.75rem]">
      <div className="lg:order-2">
        <Image
          src={ImageRealDealMobile}
          alt="The Real Deal"
          className="w-full object-cover md:hidden"
        />
        <Image
          src={ImageRealDealTablet}
          alt="The Real Deal"
          className="hidden w-full object-cover md:block lg:hidden"
        />
        <Image
          src={ImageRealDeal}
          alt="The Real Deal"
          className="hidden w-full object-cover lg:block"
        />
      </div>
      <div className="relative flex flex-col justify-center space-y-6 px-6 py-20 text-center lg:px-24 lg:py-0 lg:text-left">
        <Image
          src={SvgPatternTwoCircles}
          alt="Background pattern"
          className="absolute right-10 -bottom-5"
        />
        <h2 className="text-primary text-5xl font-medium">The real deal</h2>
        <p>
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p>
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </div>
    </section>
  );
}
