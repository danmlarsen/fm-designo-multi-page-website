import LocationSection from '@/components/location-section';
import ContactUs from './contact-us';
import FadeInOnScroll from '@/components/ui/fade-in-on-scroll';

export default function ContactPage() {
  return (
    <div className="space-y-40">
      <div className="md:px-10">
        <FadeInOnScroll id="contact-us">
          <ContactUs />
        </FadeInOnScroll>
      </div>
      <div className="md:my-40">
        <FadeInOnScroll id="location-section-contact">
          <LocationSection />
        </FadeInOnScroll>
      </div>
    </div>
  );
}
