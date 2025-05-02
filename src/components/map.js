import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// Eigene Marker-Icons einbinden
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
const position = [53.456643, 9.974095];
export default function Map() {
    return (_jsxs(MapContainer, { center: position, zoom: 16, scrollWheelZoom: false, style: { height: "300px", width: "100%", borderRadius: "0.5rem" }, children: [_jsx(TileLayer, { attribution: '\u00A9 <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors', url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }), _jsx(Marker, { position: position, icon: customIcon, children: _jsx(Popup, { children: _jsx("a", { href: "https://www.google.com/maps/place/Hastedtstra\u00DFe+30,+21073+Hamburg", target: "_blank", rel: "noopener noreferrer", className: "text-seagreen underline", children: "Adresse in Google Maps \u00F6ffnen" }) }) })] }));
}
