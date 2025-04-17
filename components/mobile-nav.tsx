"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import Navigation from "./navigation";
import IconHamburger from "@/assets/shared/mobile/icon-hamburger.svg";
import IconClose from "@/assets/shared/mobile/icon-close.svg";
import { Button } from "./ui/button";
import Logo from "./logo";

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
    <Drawer
      direction="top"
      shouldScaleBackground={true}
      open={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Image src={IconHamburger} alt="Hamburger icon" />
        </Button>
      </DrawerTrigger>

      <DrawerContent className="border-none data-[vaul-drawer-direction=top]:rounded-b-none">
        <DrawerTitle hidden={true}>Mobile Navigation</DrawerTitle>
        <header className="top-0 left-0 flex h-24 items-center justify-between bg-white px-6">
          <Logo mode="dark" />
          <DrawerClose asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Image src={IconClose} alt="Close icon" />
            </Button>
          </DrawerClose>
        </header>
        <div className="bg-black px-6 py-12 text-white">
          <Navigation className="items-start gap-8 text-2xl" />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
