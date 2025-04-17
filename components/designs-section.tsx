"use client";

import ImageWebdesign from "@/assets/home/desktop/image-web-design-large.jpg";
import ImageAppdesign from "@/assets/home/desktop/image-app-design.jpg";
import ImageGraphicDesign from "@/assets/home/desktop/image-graphic-design.jpg";

import IconRightArrow from "@/assets/shared/desktop/icon-right-arrow.svg";

import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const designLinks = [
  {
    title: "Web design",
    href: "/web-design",
    background: ImageWebdesign,
  },
  {
    title: "App design",
    href: "/app-design",
    background: ImageAppdesign,
  },
  {
    title: "Graphic design",
    href: "/graphic-design",
    background: ImageGraphicDesign,
  },
];

export default function Designs() {
  const pathname = usePathname();

  return (
    <section className="grid gap-x-8 gap-y-6 lg:grid-cols-2">
      {designLinks
        .filter((item) => item.href !== pathname)
        .map((item, index) => (
          <DesignItem
            key={item.title}
            title={item.title}
            href={item.href}
            background={item.background}
            className={
              pathname === "/" && index === 0 ? "row-span-2 lg:h-full" : ""
            }
          />
        ))}
    </section>
  );
}

function DesignItem({
  title,
  href,
  background,
  className,
}: React.ComponentProps<"a"> & {
  title: string;
  href: string;
  background: StaticImageData;
}) {
  return (
    <Link href={href} className={cn("group text-white", className)}>
      <div
        className={cn(
          `group-hover:bg-primary/75 relative grid h-[15.625rem] place-items-center overflow-hidden rounded-lg bg-black/50 bg-cover transition-colors duration-300 md:h-[12.5rem] lg:h-[19.25rem]`,
          className,
        )}
      >
        <Image
          src={background}
          alt={title}
          fill
          className="-z-10 object-cover"
        />
        <div className="flex flex-col items-center gap-6 font-medium uppercase">
          <h2 className="text-[28px] tracking-[1.4px] md:text-5xl">{title}</h2>
          <div className="flex items-center gap-5 text-[15px] tracking-[5px]">
            <span>View projects</span>
            <Image src={IconRightArrow} alt="Right arrow" />
          </div>
        </div>
      </div>
    </Link>
  );
}
