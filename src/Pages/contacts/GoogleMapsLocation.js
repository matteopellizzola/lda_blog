import { Wrapper, Status } from "@googlemaps/react-wrapper";

function GoogleMapsLocation (props) {
    const render = (status: Status) => {
        return <h1>{status}</h1>;
    };

    return <>

        <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
        </Wrapper>

    </>;
}

export default GoogleMapsLocation;