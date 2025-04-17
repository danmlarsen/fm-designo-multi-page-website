import Image from "next/image";

import IllustrationPassionate from "@/assets/home/desktop/illustration-passionate.svg";
import IllustrationResourceful from "@/assets/home/desktop/illustration-resourceful.svg";
import IllustrationFriendly from "@/assets/home/desktop/illustration-friendly.svg";

const items = [
  {
    illustration: IllustrationPassionate,
    heading: "Passionate",
    text: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
  },
  {
    illustration: IllustrationResourceful,
    heading: "Resourceful",
    text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
  },
  {
    illustration: IllustrationFriendly,
    heading: "Friendly",
    text: " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
  },
];

export default function BulletpointIllustrations() {
  return (
    <section className="grid gap-8 text-center md:text-left lg:grid-cols-3 lg:text-center">
      {items.map((item) => (
        <div
          key={item.heading}
          className="grid items-center justify-items-center gap-12 md:grid-cols-[12.625rem_1fr] lg:grid-cols-1"
        >
          <div className="bg-muted rounded-full">
            <Image src={item.illustration} alt={item.heading} />
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-medium tracking-[0.3125rem] uppercase">
              {item.heading}
            </h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
