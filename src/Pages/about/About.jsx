import { useTranslation } from "react-i18next";
import InstaFeed from "../../Components/InstaFeedSwiper";
import loadBiography from "../../database/loadBiography";
import { Helmet } from "react-helmet";

const biographyData = loadBiography();

const ig_token = import.meta.env.VITE_REACT_APP_API_INSTAGRAM_TOKEN;

function About(props) {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Chi sono | Laboratorio di Antonella</title>
        <meta name="description" content="Scopri la mia storia" />
        <meta
          name="keywords"
          content="Pane, grani antichi, prodotti da forno"
        />
        <link rel="canonical" href="https://www.laboratoriodiantonella.it/" />

        {/* Meta tag Open Graph per la condivisione sui social */}
        <meta
          property="og:title"
          content="Chi somo | Laboratorio di Antonella"
        />
        <meta
          property="og:description"
          content="Scopri la storia del laboratorio di Antonella"
        />
        <meta
          property="og:url"
          content="https://www.laboratoriodiantonella.it/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.laboratoriodiantonella.it/apple-icon-180x180.png"
        />
      </Helmet>
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

          <p
            className="bio-text"
            dangerouslySetInnerHTML={{
              __html: t("about.description.seventh"),
            }}
          ></p>

          <p
            className="bio-text"
            dangerouslySetInnerHTML={{
              __html: t("about.description.eighth"),
            }}
          ></p>

          <div className="py-5">
            <h2 className="text-center claim">{t("about.claimtwo.first")}</h2>
            {/* <h4 className="text-center">{t("about.claimtwo.second")}</h4> */}
          </div>

          <p
            className="bio-text"
            dangerouslySetInnerHTML={{
              __html: t("about.materials.first"),
            }}
          ></p>
        </div>

        <div className="instagram-container">
          <InstaFeed token={ig_token} counter="12" />
        </div>
      </div>
    </>
  );
}

export default About;
