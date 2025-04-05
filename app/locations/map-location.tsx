'use client';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

export default function MapLocation({ coords, title }: { coords: { lat: number; lng: number }; title: string }) {
  const { lat, lng } = coords;

  return (
    <MapContainer center={[lat, lng]} zoom={13} zoomControl={false} dragging={false} scrollWheelZoom={false} style={{ height: '326px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]}>
        <Popup>{title}</Popup>
      </Marker>
    </MapContainer>
  );
}
