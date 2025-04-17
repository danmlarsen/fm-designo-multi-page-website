import Image from "next/image";

import SvgPattern from "@/assets/shared/desktop/bg-pattern-two-circles.svg";
import MapLocationCaller from "./map-location-caller";
import FadeInOnScroll from "@/components/ui/fade-in-on-scroll";

const locationsData = [
  {
    country: "Canada",
    title: "Designo Central Office",
    address1: "3886 Wellington Street",
    address2: "Toronto, Ontario M9C 3J5",
    phone: "+1 253-863-8967",
    email: "contact@designo.co",
    coords: { lat: 43.6383817, lng: -79.3945597 },
  },
  {
    country: "Australia",
    title: "Designo AU Office",
    address1: "19 Balonne Street",
    address2: "New South Wales 2443",
    phone: "(02) 0720 9092",
    email: "contact@designo.au",
    coords: { lat: -27.6067145, lng: 153.0639501 },
  },
  {
    country: "United Kingdom",
    title: "Designo UK Office",
    address1: "13 Colerado Way",
    address2: "Rhyd-y-fro SA8 9GA",
    phone: "078 3115 1400",
    email: "contact@designo.uk",
    coords: { lat: 51.7288868, lng: -3.8686523 },
  },
];

export default function Locations() {
  return (
    <ul className="space-y-8 md:space-y-32">
      {locationsData.map((location) => (
        <FadeInOnScroll
          id={`location-${location.country}`}
          key={location.title}
        >
          <li
            id={location.country.split(" ").join("-").toLowerCase()}
            className="relative grid md:gap-8 lg:h-[20.375rem] lg:grid-cols-[1fr_auto]"
          >
            <Image
              src={SvgPattern}
              alt="Background pattern"
              className="absolute bottom-0 left-0"
            />
            <div className="bg-muted grid h-[20.375rem] w-full place-items-center overflow-hidden md:rounded-lg lg:order-2 lg:w-[21.875rem]">
              <MapLocationCaller
                coords={location.coords}
                title={location.title}
              />
            </div>
            <div className="bg-muted grid rounded-lg px-20 py-20 text-center md:py-24 md:text-left lg:place-items-center lg:py-0">
              <div className="space-y-6">
                <h2 className="text-primary text-5xl font-medium">
                  {location.country}
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
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
        </FadeInOnScroll>
      ))}
    </ul>
  );
}
