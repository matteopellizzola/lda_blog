import { useTranslation } from "react-i18next";
import InstaFeed from "../../Components/InstaFeedSwiper";
import loadBiography from "../../database/loadBiography";

const biographyData = loadBiography();

const ig_token = import.meta.env.VITE_REACT_APP_API_INSTAGRAM_TOKEN;

function About(props) {
  const { t } = useTranslation();

  return (
    <div className="padding-logo-top px-3">
      <h1 className="text-center font-bigger">{t("about.title")}</h1>
      <div className="about-wrapper">
        <img
          className="image-bio px-1"
          src={biographyData.biographyObj.mainImage}
          alt="image_bio"
        />
        <p
          className="bio-text"
          dangerouslySetInnerHTML={{
            __html: t("about.description.first"), //biographyData.biographyObj.mainParagraph,
          }}
        ></p>

        <p
          className="bio-text"
          dangerouslySetInnerHTML={{
            __html: t("about.description.second"),
          }}
        ></p>

        <p
          className="bio-text"
          dangerouslySetInnerHTML={{
            __html: t("about.description.third"),
          }}
        ></p>

        <p
          className="bio-text"
          dangerouslySetInnerHTML={{
            __html: t("about.description.fourth"),
          }}
        ></p>

        <div className="py-5">
          <h2 className="text-center claim">{t("about.claim.first")}</h2>
          <h4 className="text-center">{t("about.claim.second")}</h4>
        </div>

        <p
          className="bio-text"
          dangerouslySetInnerHTML={{
            __html: t("about.description.fifth"),
          }}
        ></p>

        <p
          className="bio-text"
          dangerouslySetInnerHTML={{
            __html: t("about.description.sixth"),
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
