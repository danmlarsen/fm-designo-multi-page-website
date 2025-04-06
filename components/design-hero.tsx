export default function DesignHero({ title, subtext, pattern }: { title: string; subtext: string; pattern: React.ReactNode }) {
  return (
    <header className="grid place-items-center gap-6 bg-primary px-6 py-16 text-white h-[320px] text-center md:rounded-lg relative overflow-hidden">
      {pattern}
      <h1 className="text-4xl md:text-5xl font-medium">{title}</h1>
      <p className="text-sm md:text-base">{subtext}</p>
    </header>
  );
}
