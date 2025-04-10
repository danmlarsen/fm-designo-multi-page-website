import LocationSection from '@/components/location-section';
import HeroAboutUs from './hero-about-us';
import Talent from './talent';
import TheRealDeal from './the-real-deal';

export default function AboutPage() {
  return (
    <div className="lg:space-y-40">
      <HeroAboutUs />
      <Talent />
      <div className="my-32 md:my-40">
        <LocationSection />
      </div>
      <TheRealDeal />
    </div>
  );
}
