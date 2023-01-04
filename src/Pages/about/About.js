import loadBiography from "../../database/loadBiography";

import "./about.scss";

const biographyData = loadBiography();

console.log(JSON.stringify(biographyData));

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
    </>;
}

export default About;