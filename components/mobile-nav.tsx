'use client';

import Navigation from './navigation';
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from './ui/drawer';

import IconHamburger from '@/assets/shared/mobile/icon-hamburger.svg';
import IconClose from '@/assets/shared/mobile/icon-close.svg';
import Image from 'next/image';
import { Button } from './ui/button';
import Logo from './logo';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      setIsOpen(false);
      previousPath.current = pathname;
    }
  }, [pathname]);

  return (
    <Drawer direction="top" shouldScaleBackground={true} open={isOpen} onOpenChange={open => setIsOpen(open)}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Image src={IconHamburger} alt="Hamburger icon" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className=" border-none data-[vaul-drawer-direction=top]:rounded-b-none">
        <DrawerTitle hidden={true}>Mobile Navigation</DrawerTitle>
        <header className="flex justify-between items-center h-24 px-6 top-0 left-0 bg-white">
          <Logo mode="dark" />
          <DrawerClose asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Image src={IconClose} alt="Close icon" />
            </Button>
          </DrawerClose>
        </header>
        <div className="bg-black text-white px-6 py-12">
          <Navigation className="gap-8 text-2xl items-start" />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
