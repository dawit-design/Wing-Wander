import React from 'react';
import { Map, Marker, InfoWindow } from 'google-maps-react';

console.log(Map);
const MyGoogleMap = () => {
  return (
    <Map
      google={window.google}
      zoom={14}
      initialCenter={{ lat: 37.774929, lng: -122.419416 }}
      style={{ width: '100%', height: '400px' }} // Adjust height as needed
    >
      <Marker name={'Current location'} position={{ lat: 37.774929, lng: -122.419416 }} />
      <InfoWindow>
        <div>
          <h1>InfoWindow</h1>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default MyGoogleMap;
