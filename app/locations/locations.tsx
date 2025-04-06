import SvgPattern from '@/assets/shared/desktop/bg-pattern-two-circles.svg';
import Image from 'next/image';
import MapLocationCaller from './map-location-caller';

const locationsData = [
  {
    country: 'Canada',
    title: 'Designo Central Office',
    address1: '3886 Wellington Street',
    address2: 'Toronto, Ontario M9C 3J5',
    phone: '+1 253-863-8967',
    email: 'contact@designo.co',
    coords: { lat: 43.6383817, lng: -79.3945597 },
  },
  {
    country: 'Australia',
    title: 'Designo AU Office',
    address1: '19 Balonne Street',
    address2: 'New South Wales 2443',
    phone: '(02) 0720 9092',
    email: 'contact@designo.au',
    coords: { lat: -27.6067145, lng: 153.0639501 },
  },
  {
    country: 'United Kingdom',
    title: 'Designo UK Office',
    address1: '13 Colerado Way',
    address2: 'Rhyd-y-fro SA8 9GA',
    phone: '078 3115 1400',
    email: 'contact@designo.uk',
    coords: { lat: 51.7288868, lng: -3.8686523 },
  },
];

export default function Locations() {
  return (
    <ul className="space-y-8 md:space-y-32">
      {locationsData.map(location => (
        <li
          key={location.title}
          id={location.country.split(' ').join('-').toLowerCase()}
          className="grid lg:grid-cols-[1fr_auto] md:gap-8 lg:h-[326px] relative"
        >
          <Image src={SvgPattern} alt="Background pattern" className="absolute bottom-0 left-0" />
          <div className="w-full h-[326px] lg:w-[350px] lg:order-2 bg-secondary md:rounded-lg overflow-hidden grid place-items-center">
            <MapLocationCaller coords={location.coords} title={location.title} />
          </div>
          <div className="bg-secondary rounded-lg px-20 grid lg:place-items-center py-20 md:py-24 lg:py-0 text-center md:text-left">
            <div className="space-y-6">
              <h2 className="text-primary font-medium text-5xl">{location.country}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold">{location.title}</h3>
                  <p>{location.address1}</p>
                  <p>{location.address2}</p>
                </div>
                <div>
                  <h3 className="font-bold">Contact</h3>
                  <p>{location.phone}</p>
                  <p>{location.email}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
