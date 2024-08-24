import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function CenteredMap({ position }) {
  const map = useMap();
  
  useEffect(() => {
    if (position) {
      map.setView(position, 16); // Center the map at the position with zoom level 13
    }
  }, [position, map]);

  return null;
}

function Map() {
  const [position, setPosition] = useState([51.505, -0.09]); // Default position (London)

  useEffect(() => {
    // Check if the coordinates are saved in local storage
    const savedPosition = localStorage.getItem('position');
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition));
    } else {
      // If not, get the current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newPosition = [latitude, longitude];
          setPosition(newPosition);
          localStorage.setItem('position', JSON.stringify(newPosition)); // Save position
        },
        () => {
          console.error('Error fetching location');
        }
      );
    }
  }, []);

  return (
    <>
    <Navbar />
    <MapContainer center={position} zoom={13} className="h-[90vh] w-[90%] mx-auto mt-3">
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <CenteredMap position={position} />
    <Marker position={position}>
      <Popup>
        You are here! <br /> Latitude: {position[0]}, Longitude: {position[1]}
      </Popup>
    </Marker>
  </MapContainer>
  </>
  );
}

export default Map;


