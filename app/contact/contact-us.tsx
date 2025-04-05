import SvgHeroPattern from '@/assets/contact/desktop/bg-pattern-hero-desktop.svg';
import SvgHeroPatternMobile from '@/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg';

import Image from 'next/image';
import ContactForm from './contact-form';

export default function ContactUs() {
  return (
    <section className="grid lg:grid-cols-[1fr_476px] h-[480px] bg-primary md:rounded-lg overflow-hidden text-white">
      <div className="flex px-24 flex-col justify-center space-y-8 relative text-center md:text-left">
        <Image src={SvgHeroPattern} alt="Hero pattern" className="hidden md:block absolute -left-20 lg:right-0 lg:-bottom-8" />
        <Image src={SvgHeroPatternMobile} alt="Hero pattern" className="md:hidden absolute left-0 top-0" />
        <h1 className="text-5xl font-medium">Contact Us</h1>
        <p>
          Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for
          unique digital experiences that’s relatable to your users, drop us a line.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
