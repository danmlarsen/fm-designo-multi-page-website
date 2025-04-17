import Image from 'next/image';
import Link from 'next/link';

import LogoDark from '@/assets/shared/desktop/logo-dark.png';
import LogoLight from '@/assets/shared/desktop/logo-light.png';

export default function Logo({ mode = 'dark' }: { mode?: 'dark' | 'light' }) {
  return (
    <Link href="/">
      <Image src={mode === 'light' ? LogoLight : LogoDark} alt="Designo Logo" width={196} height={24} className="w-[12.25rem] h-[1.5rem]" />
    </Link>
  );
}
