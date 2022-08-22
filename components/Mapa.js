import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [19.4406049398052, -99.19983385061217];

const Mapa = () => {
    return (
        <MapContainer
            center={position}
            zoom={17}
            scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
              <Popup>
                Aquí nos puedes encontrar
              </Popup>
          </Marker>
        
        </MapContainer>
    )
}

export default Mapa