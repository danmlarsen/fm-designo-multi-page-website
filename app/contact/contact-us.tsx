import SvgHeroPattern from '@/assets/contact/desktop/bg-pattern-hero-desktop.svg';
import Image from 'next/image';
import ContactForm from './contact-form';

export default function ContactUs() {
  return (
    <section className="grid grid-cols-[1fr_476px] h-[480px] bg-primary rounded-lg overflow-hidden text-white">
      <div className="flex px-24 flex-col justify-center space-y-8 relative">
        <Image src={SvgHeroPattern} alt="Hero pattern" className="absolute right-0 -bottom-8" />
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
