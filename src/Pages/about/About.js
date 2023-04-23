import InstaFeed from "../../Components/InstaFeedSwiper";
import loadBiography from "../../database/loadBiography";

import "./about.scss";

const biographyData = loadBiography();

const ig_token = 'IGQVJXOHR2QUFTZA3dzSWxMRUR1NG4tOW1iWm1rMkY1dzJEa3lMN1ZAXQTJwRTU5RzFYUlhWSm5jMVE1LXREYlNvV0pnLW9UYzIwejJZANXUxamt3NDZANay1XWXNWalU5N0tSZAkdzalJReEh6RFp2eVZASWgZDZD';

function About (props) {
    return <>
        <h1 className="text-center">
            Chi sono
        </h1>
        <div className="about-wrapper">
            <img className="image-bio" src={biographyData.biographyObj.mainImage} alt='' />
            <p className="bio-text">
                {biographyData.biographyObj.mainParagraph}
            </p>
        </div>

        <div className="instagram-container">
            <InstaFeed token={ig_token} counter="12" />
        </div>
    </>;
}

export default About;