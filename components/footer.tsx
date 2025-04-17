import Logo from "./logo";
import Navigation from "./navigation";
import Socials from "./socials";

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="flex flex-col border-white/10 md:flex-row md:justify-between md:border-b">
        <div className="flex justify-center border-b border-white/10 py-8 md:border-none">
          <Logo mode="light" />
        </div>
        <Navigation className="pt-8" />
      </div>

      <div className="grid justify-items-center gap-10 pt-8 text-center text-white/50 md:grid-cols-3 md:justify-items-normal md:text-left">
        <div>
          <p className="font-bold">Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div>
          <p className="font-bold">Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
        <div className="flex items-end justify-end">
          <Socials />
        </div>
      </div>
    </footer>
  );
}
