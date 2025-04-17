import Image from "next/image";

import ImageTalent from "@/assets/about/desktop/image-world-class-talent.jpg";
import ImageTalentTablet from "@/assets/about/tablet/image-world-class-talent.jpg";
import ImageTalentMobile from "@/assets/about/mobile/image-world-class-talent.jpg";
import SvgPatternTwoCircles from "@/assets/shared/desktop/bg-pattern-two-circles.svg";

export default function Talent() {
  return (
    <section className="bg-muted grid overflow-hidden md:rounded-lg lg:h-[40rem] lg:grid-cols-[29.75rem_1fr]">
      <div>
        <Image
          src={ImageTalentMobile}
          alt="World class talent"
          className="w-full object-cover md:hidden"
        />
        <Image
          src={ImageTalentTablet}
          alt="World class talent"
          className="hidden w-full object-cover md:block lg:hidden"
        />
        <Image
          src={ImageTalent}
          alt="World class talent"
          className="hidden w-full object-cover lg:block"
        />
      </div>
      <div className="relative flex flex-col justify-center space-y-6 px-6 py-20 text-center lg:px-24 lg:py-0 lg:text-left">
        <Image
          src={SvgPatternTwoCircles}
          alt="Background pattern"
          className="absolute -bottom-5 -left-35"
        />
        <h2 className="text-primary text-5xl font-medium">
          World-class talent
        </h2>
        <p>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p>
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </div>
    </section>
  );
}
