import ImageCanada from '@/assets/shared/desktop/illustration-canada.svg';
import ImageAustralia from '@/assets/shared/desktop/illustration-australia.svg';
import ImageUK from '@/assets/shared/desktop/illustration-united-kingdom.svg';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const locations = [
  {
    image: ImageCanada,
    heading: 'Canada',
    href: '/locations',
  },
  {
    image: ImageAustralia,
    heading: 'Australia',
    href: '/locations',
  },
  {
    image: ImageUK,
    heading: 'United Kingdom',
    href: '/locations',
  },
];

export default function LocationSection() {
  return (
    <section className="grid grid-cols-3 gap-8 text-center">
      {locations.map(location => (
        <div key={location.heading} className="flex flex-col items-center gap-12">
          <div className="bg-secondary rounded-full">
            <Image src={location.image} alt={location.heading} />
          </div>
          <div>
            <h3 className="text-xl font-medium uppercase tracking-[5px]">{location.heading}</h3>
            <Button asChild>
              <Link href={location.href}>See location</Link>
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
}
