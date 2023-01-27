import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import {MarkerF} from '@react-google-maps/api'
import { useMemo } from 'react';

function GoogleMapsLocation (props) {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyC9lddvhxMb1pCwbEm3q9sGPHXvfhVvHa8"//process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    });

    if(!isLoaded) return <div>Loading ...</div>
    return <Map className={props.className} />
}
export default GoogleMapsLocation;

function Map (props) {

    const center = useMemo(() => ({ lat: 45.07334186763373, lng: 7.533172965748236 }), []);

    return <GoogleMap zoom={10} center={center} mapContainerClassName={props.className}>
        <MarkerF position={center} />
    </GoogleMap>
}

// AIzaSyC9lddvhxMb1pCwbEm3q9sGPHXvfhVvHa8

//https://www.youtube.com/watch?v=9e-5QHpadi0&ab_channel=GoogleMapsPlatform