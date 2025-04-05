import Header from './header';
import Logo from './logo';
import Navigation from './navigation';
import Socials from './socials';

export default function Footer() {
  return (
    <footer className="text-white">
      <div className="flex flex-col md:flex-row md:justify-between md:border-b border-white/10">
        <div className="flex justify-center py-8 border-b border-white/10 md:border-none">
          <Logo mode="light" />
        </div>
        <Navigation className="pt-8" />
      </div>

      <div className="grid md:grid-cols-3 text-white/50 pt-8 gap-10 justify-items-center text-center md:text-left md:justify-items-normal">
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
        <div className="flex justify-end items-end">
          <Socials />
        </div>
      </div>
    </footer>
  );
}
