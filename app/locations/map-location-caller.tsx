'use client';

import dynamic from 'next/dynamic';

const LazyMap = dynamic(() => import('./map-location'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function MapLocationCaller({ coords, title }: { coords: { lat: number; lng: number }; title: string }) {
  return <LazyMap coords={coords} title={title} />;
}
