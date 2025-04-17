import SvgHeroPattern from "@/assets/contact/desktop/bg-pattern-hero-desktop.svg";
import SvgHeroPatternMobile from "@/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg";

import Image from "next/image";
import ContactForm from "./contact-form";

export default function ContactUs() {
  return (
    <section className="bg-primary relative grid gap-12 overflow-hidden px-6 py-16 text-white md:gap-6 md:rounded-lg md:px-16 lg:h-[30rem] lg:grid-cols-[minmax(33.75rem,_1fr)_1fr] lg:px-24">
      <Image
        src={SvgHeroPattern}
        alt="Hero pattern"
        className="absolute -left-20 hidden md:block lg:right-0 lg:-bottom-8"
      />
      <Image
        src={SvgHeroPatternMobile}
        alt="Hero pattern"
        className="absolute top-0 left-0 md:hidden"
      />
      <div className="flex flex-col justify-center space-y-8 text-center md:text-left lg:mb-10">
        <h1 className="text-5xl font-medium">Contact Us</h1>
        <p className="mx-auto max-w-lg md:mx-0">
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </p>
      </div>
      <div className="grid items-center">
        <ContactForm />
      </div>
    </section>
  );
}
