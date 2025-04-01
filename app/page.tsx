import Designs from './designs';
import HeroAwardWinning from './hero-award-winning';

export default function HomePage() {
  return (
    <div className="space-y-40">
      <HeroAwardWinning />
      <Designs />
    </div>
  );
}
