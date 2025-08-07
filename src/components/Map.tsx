import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import treeData from '../data/data.json';

// Fix for default marker icon
const icon = new Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const locations = [
  { name: "Planten un Blomen (soon)", lat: 53.5619, lng: 9.9833, link: "#planten-und-blomen" },
  { name: "An der Christianskirche Altona", lat: 53.5524, lng: 9.9338, link: "#kloppstock-linde" },
  { name: "Lohsepark (soon)", lat: 53.5451, lng: 10.0024, link: "#lohsepark" },
  { name: "Gerhart-Hauptmann-Platz (soon)", lat: 53.5511, lng: 9.9937, link: "#gerhard-hauptmann-platz" },
  { name: "University of Hamburg (soon)", lat: 53.5667, lng: 9.9833, link: "#uni-hamburg" },
  { name: "Marco-Polo-Terassen (soon)", lat: 53.5433, lng: 9.9917, link: "#marco-polo-terassen" },
];

export default function Map() {
  return (
    <div className="h-[500px] w-full">
      <MapContainer
        center={[53.5511, 9.9937]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={[location.lat, location.lng]}
            icon={icon}
          >
            <Popup>
              <div className="font-semibold"><a href={location.link}>{location.name}</a></div>
              {treeData.filter(item => item["Unnamed: 0"] === location.name).map((tree, i) => (
                <div key={i} className="text-sm">{tree["Unnamed: 2"]}</div>
              ))}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}