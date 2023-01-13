import { GoogleMap, useLoadScript,  } from '@react-google-maps/api';

function GoogleMapsLocation (props) {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    });

    if(!isLoaded) return <div>Loading ...</div>
    return <Map />
}
export default GoogleMapsLocation;


function Map () {
    return <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} mapContainerClassName="google-map">

    </GoogleMap>
}

// AIzaSyC9lddvhxMb1pCwbEm3q9sGPHXvfhVvHa8

//https://www.youtube.com/watch?v=9e-5QHpadi0&ab_channel=GoogleMapsPlatform