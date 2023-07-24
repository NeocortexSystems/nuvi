import React from 'react';
import { Marker } from '@react-google-maps/api';

interface MapMarkerProps {
  position: {
    lat: number,
    lng: number,
  };
  onClick: () => void;
}

const MapMarker: React.FC<MapMarkerProps> = ({ position, onClick }) => {
  return (
    <Marker
      position={position}
      onClick={onClick}
    />
  );
};

export default MapMarker;