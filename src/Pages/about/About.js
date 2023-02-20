import InstaFeed from "../../Components/InstaFeedSwiper";
import loadBiography from "../../database/loadBiography";

import "./about.scss";

const biographyData = loadBiography();

const ig_token = 'IGQVJYdXVuWFpGci1VbXlGcXZAwR3JLbGd0Wi1FSXd2cmZAOT0J3djVnMzUwbEFCNUpXLS1vcVM3ZA3cyT3cyd1ZAlZAXU4SVJtVFdUdmJuTF8wc2VvMnh2YlUwQnoxZAmZA1cy1mdTZAEV1VLSk85dlhsTjlMWgZDZD';

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