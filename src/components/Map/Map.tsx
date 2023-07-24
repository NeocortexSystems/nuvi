import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import MapMarker from './MapMarker';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  markers: LatLngExpression[];
}

const Map: React.FC<MapProps> = ({ markers }) => {
  const [currentLocation, setCurrentLocation] = useState<LatLngExpression>([0, 0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  return (
    <MapContainer center={currentLocation} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((position, idx) => (
        <MapMarker key={idx} position={position} />
      ))}
      <Marker position={currentLocation}>
        <Popup>You are here</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;