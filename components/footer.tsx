import Header from './header';

export default function Footer() {
  return (
    <footer>
      <Header mode="light" className="pb-10 border-b border-white/10" />
      <div className="grid grid-cols-3 text-white/50 pt-8">
        <div>
          <p>Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div>
          <p>Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
        <div className="flex justify-end items-end">socials</div>
      </div>
    </footer>
  );
}
