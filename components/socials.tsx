import IconFacebook from '@/assets/shared/desktop/icon-facebook.svg';
import IconYoutube from '@/assets/shared/desktop/icon-youtube.svg';
import IconTwitter from '@/assets/shared/desktop/icon-twitter.svg';
import IconPinterest from '@/assets/shared/desktop/icon-pinterest.svg';
import IconInstagram from '@/assets/shared/desktop/icon-instagram.svg';
import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
  {
    title: 'Facebook',
    icon: IconFacebook,
    href: '#',
  },
  {
    title: 'Youtube',
    icon: IconYoutube,
    href: '#',
  },
  {
    title: 'Twitter',
    icon: IconTwitter,
    href: '#',
  },
  {
    title: 'Pinterest',
    icon: IconPinterest,
    href: '#',
  },
  {
    title: 'Instagram',
    icon: IconInstagram,
    href: '#',
  },
];

export default function Socials() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(social => (
        <Link key={social.title} href={social.href}>
          <Image src={social.icon} alt={social.title} />
        </Link>
      ))}
    </div>
  );
}
