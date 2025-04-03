import Image from 'next/image';

export default function DesignHero({ title, subtext, pattern }: { title: string; subtext: string; pattern: React.ReactNode }) {
  return (
    <header className="grid place-items-center gap-6 bg-primary py-16 text-white text-center rounded-lg relative overflow-hidden">
      {pattern}
      <h1 className="text-5xl font-medium">{title}</h1>
      <p>{subtext}</p>
    </header>
  );
}
