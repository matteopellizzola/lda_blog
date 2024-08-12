import InstaFeed from "../../Components/InstaFeedSwiper";
import loadBiography from "../../database/loadBiography";

import "./about.scss";

const biographyData = loadBiography();

const ig_token = import.meta.env.VITE_REACT_APP_API_INSTAGRAM_TOKEN;

function About(props) {
  return (
    <div className="padding-logo-top px-3">
      <h1 className="text-center font-bigger">Chi sono</h1>
      <div className="about-wrapper">
        <img
          className="image-bio px-1"
          src={biographyData.biographyObj.mainImage}
          alt="image_bio"
        />
        <p
          className="bio-text"
          dangerouslySetInnerHTML={{
            __html: biographyData.biographyObj.mainParagraph,
          }}
        ></p>

        <div className="py-5">
          <h2 className="text-center claim">Benvenuti nel mio laboratorio</h2>
          <h4 className="text-center">dove c'è profumo di buono</h4>
        </div>

        <p
          className="bio-text"
          dangerouslySetInnerHTML={{
            __html: biographyData.biographyObj.secondParagraph,
          }}
        ></p>
      </div>

      <div className="instagram-container">
        <InstaFeed token={ig_token} counter="12" />
      </div>
    </div>
  );
}

export default About;
