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

export default function Navigation({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <nav>
      <ul className={cn('flex flex-col md:flex-row gap-10 items-center uppercase text-sm tracking-wider', className)} {...props}>
        {pages.map(page => (
          <li key={page.href}>
            <Link href={page.href}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
