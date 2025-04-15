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
          <li key={page.href} className="relative group">
            <Link href={page.href}>{page.title}</Link>
            <div className="h-[1px] w-full absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 bg-current transition-opacity duration-300" />
          </li>
        ))}
      </ul>
    </nav>
  );
}
