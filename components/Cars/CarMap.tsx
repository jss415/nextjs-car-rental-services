"use client";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import CarTitle from "./CarTitle";

function CarMap({ location }: { location: [number, number] }) {
  const defaultLocation = [51.505, -0.09] as [number, number];
  console.log("location: ", location);
  console.log("defaultLocation: ", defaultLocation);

  return (
    <div className="mt-12">
      <div className="mb-4 ">
        <CarTitle text="Where your rental car is located" />
      </div>
      <MapContainer
        scrollWheelZoom={false}
        zoomControl={false}
        className="h-[50vh] rounded-lg relative z-0"
        center={location || defaultLocation}
        zoom={30}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}
export default CarMap;
