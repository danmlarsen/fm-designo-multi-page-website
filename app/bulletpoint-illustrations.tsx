import IllustrationPassionate from '@/assets/home/desktop/illustration-passionate.svg';
import IllustrationResourceful from '@/assets/home/desktop/illustration-resourceful.svg';
import IllustrationFriendly from '@/assets/home/desktop/illustration-friendly.svg';
import Image from 'next/image';

const items = [
  {
    illustration: IllustrationPassionate,
    heading: 'Passionate',
    text: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
  },
  {
    illustration: IllustrationResourceful,
    heading: 'Resourceful',
    text: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
  },
  {
    illustration: IllustrationFriendly,
    heading: 'Friendly',
    text: ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
  },
];

export default function BulletpointIllustrations() {
  return (
    <section className="grid lg:grid-cols-3 gap-8 text-center md:text-left lg:text-center">
      {items.map(item => (
        <div key={item.heading} className="grid md:grid-cols-[202px_1fr] lg:grid-cols-1 items-center justify-items-center gap-12">
          <div className="bg-secondary rounded-full">
            <Image src={item.illustration} alt={item.heading} />
          </div>
          <div className="space-y-8">
            <h3 className="font-medium text-2xl uppercase tracking-[5px]">{item.heading}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
