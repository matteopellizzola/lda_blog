// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from "react-helmet";

import { Navigation, Pagination, Autoplay, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/lazy";

import { useNavigate } from "react-router-dom";

// import "react-ig-feed/dist/index.css";
import InstaFeed from "../../Components/InstaFeed";
import DualBoxesComponent from "../components/DualBoxesComponent";
import TextAndImageComponent from "../components/TextAndImageComponent";
import { useState } from "react";
import classNames from "classnames";
import VideoPlayer from "../components/VideoPlayer";

function Home(props) {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate("/" + path);
  };

  const ig_token = import.meta.env.VITE_REACT_APP_API_INSTAGRAM_TOKEN;
  const [isInstagramActive, setIsInstagramActive] = useState(true);

  return (
    <>
      <Helmet>
        <title>Laboratorio di Antonella</title>
        <meta
          name="description"
          content="Questa è la home di Laboratorio di Antonella, esplora i miei prodotti da forno"
        />
        <meta
          name="keywords"
          content="Pane, grani antichi, prodotti da forno"
        />
        <link rel="canonical" href="https://www.laboratoriodiantonella.it/" />

        {/* Meta tag Open Graph per la condivisione sui social */}
        <meta property="og:title" content="Home | Laboratorio di Antonella" />
        <meta
          property="og:description"
          content="Scopri i prodotti del laboratorio di Antonella"
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
      {/* <VideoPlayer
        id="demo-player"
        publicId="home/km0czw697uzn6j54yudx"
        width="3840"
        height="2160"
      /> */}

      <TextAndImageComponent
        title={"Laboratorio di Antonella"}
        description={
          "Benvenuti nel mio laboratorio, dove le lavorazioni e i profumi cambiano di giorno in giorno e di stagione in stagione."
        }
        image={
          "https://res.cloudinary.com/dbdivqgja/image/upload/v1725803609/home/web-41_shmweg.jpg"
        }
        link={"about"}
        handleClick={handleClick}
        reverse={false}
        outer={true}
      />

      <div className="main-slider">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Lazy]}
          loop={true}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          lazy={true}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dbdivqgja/image/upload/v1708982424/home/Slider/slide1.jpg"
              alt="slide-img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dbdivqgja/image/upload/v1708982424/home/Slider/slide2.jpg"
              alt="slide-img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dbdivqgja/image/upload/v1708982424/home/Slider/slide3.jpg"
              alt="slide-img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dbdivqgja/image/upload/v1708982424/home/Slider/slide4.jpg"
              alt="slide-img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dbdivqgja/image/upload/v1708982424/home/Slider/slide5.jpg"
              alt="slide-img"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="dual-boxes">
        <div className="box-container" onClick={() => handleClick("products")}>
          <img
            src="https://res.cloudinary.com/dbdivqgja/image/upload/v1725803987/web-25_uxtgg1.jpg"
            alt="slide-img"
          />
          <span className="cta-box">
            Grissini all'olio extravergine di oliva
          </span>
        </div>
        <div className="box-container" onClick={() => handleClick("products")}>
          <img
            src="https://res.cloudinary.com/dbdivqgja/image/upload/v1708982424/home/Slider/slide5.jpg"
            alt="slide-img"
          />
          <span className="cta-box">Sfoglietti integrali</span>
        </div>
      </div>

      {/* <div className="dual-boxes">
        <div className="box-container" onClick={() => handleClick("about")}>
          <img
            src="https://res.cloudinary.com/dbdivqgja/image/upload/v1690297358/ovrjeqmvdy5tmswnm2sb.jpg"
            alt="slide-img"
          />
          <span className="cta-box">testo di esempio</span>
        </div>

        <div className="box-container" onClick={() => handleClick("about")}>
          <img
            src="https://res.cloudinary.com/dbdivqgja/image/upload/v1690297373/z4avm70uyslfxzgonzca.jpg"
            alt="slide-img"
          />
          <span className="cta-box">testo di esempio</span>
        </div>
      </div> */}

      <TextAndImageComponent
        title={"La ricerca"}
        description={
          "I prodotti utilizzati nel mio laboratorio sono selezionati cercando sempre di conoscere in prima persona i produttori."
        }
        image={
          "https://res.cloudinary.com/dbdivqgja/image/upload/v1705439161/home/web-11_kfmcvu.jpg"
        }
        link={"about"}
        handleClick={handleClick}
        reverse={true}
      />

      <DualBoxesComponent
        leftTitle={"Paste fiorentine al cioccolato"}
        rightTitle={"Pane in cassetta integrale"}
        leftLink={"products"}
        rightLink={"products"}
        handleClick={handleClick}
        leftImage={
          "https://res.cloudinary.com/dbdivqgja/image/upload/v1705438881/home/TextImageComponent.jpg"
        }
        rightImage={
          "https://res.cloudinary.com/dbdivqgja/image/upload/v1705356150/matteoImmagine.png"
        }
      />

      <div className="mono-box">
        <div className="box-container" onClick={() => handleClick("about")}>
          <img
            src="https://res.cloudinary.com/dbdivqgja/image/upload/v1708982424/home/Slider/slide2.jpg"
            alt="slide-img"
          />
          <span className="cta-box">Pane con farina integra</span>
        </div>
      </div>

      <div
        className={classNames(
          "instagram-container text-center",
          isInstagramActive ? "" : "d-none"
        )}
      >
        <h4>Segui gli aggiornamenti in tempo reale</h4>
        <h6>alcuni post del mio profilo instagram </h6>

        {/* <InstagramFeed token={ig_token} counter="9" /> */}
        <InstaFeed
          token={ig_token}
          counter="12"
          setIsInstagramActive={setIsInstagramActive}
        />
      </div>
    </>
  );
}

export default Home;

//https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&&access_token=IGQVJYdXVuWFpGci1VbXlGcXZAwR3JLbGd0Wi1FSXd2cmZAOT0J3djVnMzUwbEFCNUpXLS1vcVM3ZA3cyT3cyd1ZAlZAXU4SVJtVFdUdmJuTF8wc2VvMnh2YlUwQnoxZAmZA1cy1mdTZAEV1VLSk85dlhsTjlMWgZDZD
