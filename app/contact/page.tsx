import LocationSection from '@/components/location-section';
import ContactUs from './contact-us';

export default function ContactPage() {
  return (
    <div className="space-y-40">
      <div className="md:px-10">
        <ContactUs />
      </div>
      <div className="md:my-40">
        <LocationSection />
      </div>
    </div>
  );
}
