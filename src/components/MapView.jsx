import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView() {
  const chennai = [13.0827, 80.2707];

  return (
    <div className="map-container">
      <MapContainer
        center={chennai}
        zoom={13}
        scrollWheelZoom={true}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={chennai}>
          <Popup>Chennai</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}


