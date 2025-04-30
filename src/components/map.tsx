import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
  } from "react-leaflet";
  import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  
  // Eigene Marker-Icons einbinden
  import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
  import markerIcon from "leaflet/dist/images/marker-icon.png";
  import markerShadow from "leaflet/dist/images/marker-shadow.png";
  
  // Custom Icon definieren
  const customIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  
  // Standort-Koordinaten
  const position: [number, number] = [53.456643, 9.974095];
  
  export default function Map(): JSX.Element {
    return (
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "300px", width: "100%", borderRadius: "0.5rem" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
        <Popup>
  <a
    href="https://www.google.com/maps/place/Hastedtstraße+30,+21073+Hamburg"
    target="_blank"
    rel="noopener noreferrer"
    className="text-seagreen underline"
  >
    Adresse in Google Maps öffnen
  </a>
</Popup>
        </Marker>
      </MapContainer>
    );
  }
  