'use client';

import ImageWebdesign from '@/assets/home/desktop/image-web-design-large.jpg';
import ImageAppdesign from '@/assets/home/desktop/image-app-design.jpg';
import ImageGraphicDesign from '@/assets/home/desktop/image-graphic-design.jpg';

import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const designLinks = [
  {
    title: 'Web design',
    href: '/web-design',
    background: ImageWebdesign,
  },
  {
    title: 'App design',
    href: '/app-design',
    background: ImageAppdesign,
  },
  {
    title: 'Graphic design',
    href: '/graphic-design',
    background: ImageGraphicDesign,
  },
];

export default function Designs() {
  const pathname = usePathname();

  return (
    <section className="grid lg:grid-cols-2 gap-x-8 gap-y-6">
      {designLinks
        .filter(item => item.href !== pathname)
        .map((item, index) => (
          <DesignItem
            key={item.title}
            title={item.title}
            href={item.href}
            background={item.background}
            className={designLinks.length > 2 && index === 0 ? 'row-span-2 lg:min-h-full' : ''}
          />
        ))}
    </section>
  );
}

function DesignItem({ title, href, background, className }: React.ComponentProps<'a'> & { title: string; href: string; background: StaticImageData }) {
  return (
    <Link href={href} className={cn('text-white', className)}>
      <div className={cn(`grid place-items-center bg-cover rounded-lg h-[250px] relative bg-black/50 overflow-hidden`, className)}>
        <Image src={background} alt={title} fill className="-z-10 object-cover" />
        <h3 className="text-5xl">{title}</h3>
      </div>
    </Link>
  );
}
