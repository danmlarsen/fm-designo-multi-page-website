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

export default function Navigation() {
  return (
    <nav>
      <ul className="flex gap-10 uppercase text-sm tracking-wider">
        {pages.map(page => (
          <li key={page.href}>
            <Link href={page.href}>{page.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
