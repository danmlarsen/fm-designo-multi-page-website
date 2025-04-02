import LocationSection from '@/components/location-section';
import HeroAboutUs from './hero-about-us';
import Talent from './talent';
import TheRealDeal from './the-real-deal';

export default function AboutPage() {
  return (
    <div className="space-y-40">
      <HeroAboutUs />
      <Talent />
      <LocationSection />
      <TheRealDeal />
    </div>
  );
}
