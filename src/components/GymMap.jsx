import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in leaflet with webpack/create-react-app
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const GymMap = () => {
    // Casablanca Coordinates
    const position = [33.5731, -7.5898]; 

    return (
        <div style={{ height: '400px', width: '100%', borderRadius: '15px', overflow: 'hidden', marginTop: '40px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <MapContainer 
                center={position} 
                zoom={14} 
                scrollWheelZoom={false} 
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        Iron Zone Gym <br /> Casablanca
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default GymMap;
