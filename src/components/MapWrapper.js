import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import mapStyles from '../mapStyles';
import iconUrl from '../assets/location-icon.png';

function Map(props){
    const [selectedLocation, setSelectedLocation] = useState({ location: '12 Upper St. Martin’s Lane WC2H 9FB, London' });
    return (
        <GoogleMap 
            defaultZoom={14}
            defaultCenter={{ lat: 51.512489, lng: -0.127120 }}
            defaultOptions={{ styles: mapStyles }}
            google={props.google}
        >
        <Marker
            position={{ 
                lat: 51.512489, lng: -0.127120
            }}
            icon={{ 
                url: iconUrl
            }}
            onClick={() => { setSelectedLocation({ location: '12 Upper St. Martin’s Lane WC2H 9FB, London' }); }}
        />
        {selectedLocation && (
            <InfoWindow
                position={{
                    lat: 51.512489, lng: -0.127120
                }}
                onCloseClick={() => { setSelectedLocation(null); }}
            >
                <div>
                    <span className="location-heading">LOCATION</span>
                    <div className="location-text">{selectedLocation.location}</div>
                </div>
            </InfoWindow>
        )} 
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
const API_KEY = 'AIzaSyBJm5OYzLYdmNHM3meWL7LNlHKZy0i7J3A';

export default function MapWrapper() {
    return (
        <div style={{ width: '1366px', height: 'auto', margin: 'auto'}}>
            <WrappedMap 
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}`}
                loadingElement={<div style={{ height: '100%' }}/>}
                containerElement={<div style={{ height: '700px' }}/>}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}