// import InstaFeed from "../../Components/InstaFeedSwiper";
import loadBiography from "../../database/loadBiography";

import "./about.scss";

const biographyData = loadBiography();

const ig_token = process.env.REACT_APP_API_INSTAGRAM_TOKEN;

function About(props) {
    return <div className="padding-logo-top px-3">
        <h1 className="text-center">
            Chi sono
        </h1>
        <div className="about-wrapper">
            <img className="image-bio" src={biographyData.biographyObj.mainImage} alt='image_bio' />
            <p className="bio-text">
                {biographyData.biographyObj.mainParagraph}
            </p>
        </div>

        <div className="instagram-container">
            {/* <InstaFeed token={ig_token} counter="12" /> */}
        </div>
    </div>;
}

export default About;