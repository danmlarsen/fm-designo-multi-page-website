"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function MapLocation({
  coords,
  title,
}: {
  coords: { lat: number; lng: number };
  title: string;
}) {
  const { lat, lng } = coords;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      zoomControl={false}
      dragging={false}
      scrollWheelZoom={false}
      style={{ height: "20.375rem", width: "100%", zIndex: "10" }}
    >
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
