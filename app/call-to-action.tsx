'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import SvgPatternCTA from '@/assets/shared/desktop/bg-pattern-call-to-action.svg';
import Image from 'next/image';

export default function CallToAction() {
  const pathname = usePathname();

  if (pathname === '/contact') return null;

  return (
    <div className="lg:h-[292px] bg-primary rounded-lg z-10 relative px-6 md:px-24 grid lg:grid-cols-2 gap-8 items-center text-white py-16 text-center lg:text-start overflow-hidden">
      <Image src={SvgPatternCTA} alt="Background pattern" className="absolute right-0 -bottom-1/2 w-[876px] h-[584px] object-cover -z-10" />
      <div className="flex flex-col gap-6 items-center lg:items-start">
        <h2 className="text-3xl md:text-4xl font-medium max-w-[268px]">Let’s talk about your project</h2>
        <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
      </div>
      <div className="flex justify-center lg:justify-end items-center">
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  );
}
