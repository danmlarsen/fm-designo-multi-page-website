'use client';

import Navigation from './navigation';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer';

import IconHamburger from '@/assets/shared/mobile/icon-hamburger.svg';
import IconClose from '@/assets/shared/mobile/icon-close.svg';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from './ui/button';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="ghost" className="md:hidden z-[100] px-0" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen && <Image src={IconHamburger} alt="Hamburger icon" />}
        {!!isOpen && <Image src={IconClose} alt="Close icon" />}
      </Button>

      <Drawer direction="top" open={isOpen} onOpenChange={open => setIsOpen(open)}>
        <DrawerContent className="bg-black text-white px-6 py-12 data-[vaul-drawer-direction=top]:top-[95px] z-50 border-none data-[vaul-drawer-direction=top]:rounded-b-none">
          <DrawerTitle hidden={true}>Mobile Navigation</DrawerTitle>
          <Navigation className="gap-8 text-2xl items-start" />
        </DrawerContent>
      </Drawer>
    </>
  );
}
