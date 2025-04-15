import LocationSection from '@/components/location-section';
import HeroAboutUs from './hero-about-us';
import Talent from './talent';
import TheRealDeal from './the-real-deal';

export default function AboutPage() {
  return (
    <div className="md:space-y-40 md:px-10">
      <HeroAboutUs />
      <Talent />
      <div className="my-32 md:my-40">
        <LocationSection />
      </div>
      <TheRealDeal />
    </div>
  );
}
