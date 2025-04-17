import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import ImageHeroPhone from "@/assets/home/desktop/image-hero-phone.png";
import SvgHeroPattern from "@/assets/home/desktop//bg-pattern-hero-home.svg";

export default function HeroAwardWinning() {
  return (
    <section className="bg-primary relative flex flex-col items-center justify-center overflow-hidden pt-20 text-white md:rounded-lg lg:h-[40rem] lg:items-start lg:pt-0">
      <Image
        src={SvgHeroPattern}
        alt="Hero pattern"
        className="absolute top-0 -right-3"
      />
      <div className="z-10 px-4 text-center lg:pr-0 lg:pl-24 lg:text-left">
        <h1 className="mb-2.5 max-w-lg text-3xl font-medium md:text-5xl">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="mb-10 max-w-md">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button asChild>
          <Link href="/about">About us</Link>
        </Button>
      </div>
      <div className="relative h-[28.125rem] w-full overflow-x-clip lg:absolute lg:right-0 lg:w-[31.25rem]">
        <Image
          src={ImageHeroPhone}
          alt="Image of a cell-phone"
          priority={true}
          className="absolute -top-40 left-1/2 w-[43.75rem] max-w-none -translate-x-1/2 lg:-top-25 lg:w-[37.5rem]"
        />
      </div>
    </section>
  );
}
