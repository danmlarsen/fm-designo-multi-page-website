import Link from "next/link";

import { cn } from "@/lib/utils";

const pages = [
  {
    title: "Our company",
    href: "/about",
  },
  {
    title: "Locations",
    href: "/locations",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Navigation({
  className,
  label = "Navigation",
  ...props
}: React.ComponentProps<"ul"> & { label?: string }) {
  return (
    <nav aria-label={label}>
      <ul
        className={cn(
          "flex flex-col items-center gap-10 text-sm tracking-wider uppercase md:flex-row",
          className,
        )}
        {...props}
      >
        {pages.map((page) => (
          <li key={page.href} className="group relative">
            <Link href={page.href}>{page.title}</Link>
            <div className="absolute right-0 bottom-0 left-0 h-[1px] w-full bg-current opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </li>
        ))}
      </ul>
    </nav>
  );
}
