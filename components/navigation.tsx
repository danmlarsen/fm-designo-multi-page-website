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

export default function Navigation({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav className={cn('', className)} {...props}>
      <ul className="flex flex-col md:flex-row gap-8 md:gap-10 md:items-center uppercase text-2xl md:text-sm tracking-wider">
        {pages.map(page => (
          <li key={page.href}>
            <Link href={page.href}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
