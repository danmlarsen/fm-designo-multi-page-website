import ImageWebdesign from '@/assets/home/desktop/image-web-design-large.jpg';
import ImageAppdesign from '@/assets/home/desktop/image-app-design.jpg';
import ImageGraphicDesign from '@/assets/home/desktop/image-graphic-design.jpg';
import Link from 'next/link';
import { type StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

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
  return (
    <section className="grid grid-cols-2 gap-x-8 gap-y-6 min-h-[640px]">
      {designLinks.map((item, index) => (
        <DesignItem key={item.title} title={item.title} href={item.href} background={item.background} className={index === 0 ? 'row-span-2' : ''} />
      ))}
    </section>
  );
}

function DesignItem({ title, href, background, className }: React.ComponentProps<'a'> & { title: string; href: string; background: StaticImageData }) {
  return (
    <Link href={href} className={cn('text-white', className)}>
      <div className={cn(`grid place-items-center bg-cover h-full rounded-lg`)} style={{ backgroundImage: `url(${background.src})` }}>
        <h3 className="text-5xl">{title}</h3>
      </div>
    </Link>
  );
}
