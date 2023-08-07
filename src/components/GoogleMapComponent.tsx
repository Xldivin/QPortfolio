import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '20rem',
  height: '30rem',
};

const center = {
  lat: 37.7749, // Example latitude
  lng: -122.4194, // Example longitude
};

function GoogleMapComponent() {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;
