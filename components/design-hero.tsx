export default function DesignHero({
  title,
  subtext,
  pattern,
}: {
  title: string;
  subtext: string;
  pattern: React.ReactNode;
}) {
  return (
    <header className="bg-primary relative grid h-[20rem] place-items-center gap-6 overflow-hidden px-6 py-16 text-center text-white md:rounded-lg">
      {pattern}
      <h1 className="text-4xl font-medium md:text-5xl">{title}</h1>
      <p className="text-sm md:text-base">{subtext}</p>
    </header>
  );
}
