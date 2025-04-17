import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";
import ImageCanada from "@/assets/shared/desktop/illustration-canada.svg";
import ImageAustralia from "@/assets/shared/desktop/illustration-australia.svg";
import ImageUK from "@/assets/shared/desktop/illustration-united-kingdom.svg";

const locations = [
  {
    image: ImageCanada,
    heading: "Canada",
    href: "/locations#canada",
  },
  {
    image: ImageAustralia,
    heading: "Australia",
    href: "/locations#australia",
  },
  {
    image: ImageUK,
    heading: "United Kingdom",
    href: "/locations#united-kingdom",
  },
];

export default function LocationSection() {
  return (
    <section className="grid gap-8 text-center lg:grid-cols-3">
      {locations.map((location) => (
        <div
          key={location.heading}
          className="flex flex-col items-center gap-12"
        >
          <div className="bg-muted rounded-full">
            <Image src={location.image} alt={location.heading} />
          </div>
          <div className="space-y-8">
            <h3 className="text-xl font-medium tracking-[0.3125rem] uppercase">
              {location.heading}
            </h3>
            <Button asChild className="bg-primary text-white">
              <Link href={location.href}>See location</Link>
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
}
