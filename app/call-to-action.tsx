"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import SvgPatternCTA from "@/assets/shared/desktop/bg-pattern-call-to-action.svg";

export default function CallToAction() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <div className="bg-primary relative z-10 grid items-center gap-8 overflow-hidden rounded-lg px-6 py-16 text-center text-white md:px-24 lg:h-[18.25rem] lg:grid-cols-2 lg:text-start">
      <Image
        src={SvgPatternCTA}
        alt="Background pattern"
        className="absolute right-0 -bottom-1/2 -z-10 h-[36.5rem] w-[54.75rem] object-cover"
      />
      <div className="flex flex-col items-center gap-6 lg:items-start">
        <h2 className="max-w-[16.75rem] text-3xl font-medium md:text-4xl">
          Let’s talk about your project
        </h2>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div className="flex items-center justify-center lg:justify-end">
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </div>
  );
}
