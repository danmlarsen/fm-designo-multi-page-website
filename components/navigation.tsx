import { cn } from '@/lib/utils';
import Link from 'next/link';

const pages = [
  {
    title: 'Our company',
    href: '/about',
  },
  {
    title: 'Locations',
    href: '/locations',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

export default function Navigation({ className }: React.ComponentProps<'nav'>) {
  return (
    <nav className={cn('', className)}>
      <ul className="flex flex-col md:flex-row gap-10 items-center uppercase text-sm tracking-wider">
        {pages.map(page => (
          <li key={page.href}>
            <Link href={page.href}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
