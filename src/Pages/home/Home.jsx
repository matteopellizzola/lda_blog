// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay, Lazy } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/lazy";

import "./home.scss";
import { useNavigate } from "react-router-dom";

// import "react-ig-feed/dist/index.css";
import InstaFeed from "../../Components/InstaFeed";
import DualBoxesComponent from "../components/DualBoxesComponent";
import TextAndImageComponent from "../components/TextAndImageComponent";
import { useEffect, useState } from "react";
import classNames from "classnames";
import VideoPlayer from "../components/VideoPlayer";
import api from "../../services/api";
import SingleBoxComponent from "../components/SingleBoxComponent";

function Home(props) {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate("/" + path);
  };

  const ig_token = import.meta.env.VITE_REACT_APP_API_INSTAGRAM_TOKEN;
  const [isInstagramActive, setIsInstagramActive] = useState(true);
  const [homePageData, setHomePageData] = useState(null);

  useEffect(() => {
    api.home.getHomePage().then((result) => {
      console.log("result", result);
      setHomePageData(result.homepage);
    });
  }, []);

  return (
    <>
      {/* VIDEO SECTION */}

      {/* TEXT AND IMAGE 1 */}
      {homePageData?.textAndImageContainer?.length && (
        <TextAndImageComponent
          title={homePageData?.textAndImageContainer?.[0].title}
          description={homePageData?.textAndImageContainer?.[0].description}
          image={homePageData?.textAndImageContainer?.[0].image.url}
          link={homePageData?.textAndImageContainer?.[0].link}
          handleClick={handleClick}
          reverse={homePageData?.textAndImageContainer?.[0].reverse}
        />
      )}

      {/* IMAGE GALLERY SECTION */}

      {/* DUAL BOX SECTION */}
      {homePageData?.dualBox?.length && (
        <DualBoxesComponent
          leftTitle={homePageData?.dualBox?.[0].first?.title}
          rightTitle={homePageData?.dualBox?.[0].second?.title}
          leftLink={"about"} //TODO: add link?
          rightLink={"about"}
          handleClick={handleClick}
          leftImage={homePageData?.dualBox?.[0].first?.image?.url}
          rightImage={homePageData?.dualBox?.[0].second?.image?.url}
        />
      )}

      {/* TEXT AND IMAGE 2 */}
      {homePageData?.textAndImageContainer?.length &&
        homePageData?.textAndImageContainer?.[1] && (
          <TextAndImageComponent
            title={homePageData?.textAndImageContainer?.[1].title}
            description={homePageData?.textAndImageContainer?.[1].description}
            image={homePageData?.textAndImageContainer?.[1].image.url}
            link={homePageData?.textAndImageContainer?.[1].link}
            handleClick={handleClick}
            reverse={homePageData?.textAndImageContainer?.[1].reverse}
          />
        )}

      {/* DUAL BOX SECTION 2 */}
      {homePageData?.dualBox?.length && homePageData?.dualBox?.[1] && (
        <DualBoxesComponent
          leftTitle={homePageData?.dualBox?.[1].first?.title}
          rightTitle={homePageData?.dualBox?.[1].second?.title}
          leftLink={"about"} //TODO: add link?
          rightLink={"about"}
          handleClick={handleClick}
          leftImage={homePageData?.dualBox?.[1].first?.image?.url}
          rightImage={homePageData?.dualBox?.[1].second?.image?.url}
        />
      )}

      {/* SINGLE BOX SECTION 2 */}
      {homePageData?.singleBox?.length && (
        <SingleBoxComponent
          title={homePageData?.singleBox?.[0].title}
          image={homePageData?.singleBox?.[0].first?.image?.url}
        />
      )}

      {/* <div className="main-slider">
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

      <TextAndImageComponent
        title={"Laboratorio di Antonella"}
        description={
          "Benvenuti nel mio laboratorio, dove c'è profumo di buono. Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum."
        }
        image={
          "https://res.cloudinary.com/dbdivqgja/image/upload/v170543632/home/TextImageComponent.jpg"
        }
        link={"products"}
        handleClick={handleClick}
        reverse={false}
        outer={true}
      /> */}
      {/* <div className="dual-boxes">
        <div className="box-container" onClick={() => handleClick("about")}>
          <img
            src="https://res.cloudinary.com/dbdivqgja/image/upload/v1690297373/z4avm70uyslfxzgonzca.jpg"
            alt="slide-img"
          />
          <span className="cta-box">testo di esempio</span>
        </div>
        <div className="box-container" onClick={() => handleClick("menu")}>
          <img
            src="https://res.cloudinary.com/dbdivqgja/image/upload/v1708982424/home/Slider/slide5.jpg"
            alt="slide-img"
          />
          <span className="cta-box">altro testo di esempio</span>
        </div>
      </div> */}
      {/* <VideoPlayer
        id="demo-player"
        publicId="home/km0czw697uzn6j54yudx"
        width="3840"
        height="2160"
      /> */}
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
      </div>

      <TextAndImageComponent
        title={"Laboratorio di altro"}
        description={
          "Benvenuti nel mio laboratorio, dove c'è profumo di buono. Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum."
        }
        image={
          "https://res.cloudinary.com/dbdivqgja/image/upload/v1705439161/home/web-11_kfmcvu.jpg"
        }
        link={"about"}
        handleClick={handleClick}
        reverse={true}
      />

      <DualBoxesComponent
        leftTitle={"This is an example"}
        rightTitle={"This is another example"}
        leftLink={"about"}
        rightLink={"about"}
        handleClick={handleClick}
        leftImage={
          "https://res.cloudinary.com/dbdivqgja/image/upload/v1690297358/ovrjeqmvdy5tmswnm2sb.jpg"
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
          <span className="cta-box">testo di esempio</span>
        </div>
      </div> */}
      {/* <div
        className={classNames(
          "instagram-container text-center",
          isInstagramActive ? "" : "d-none"
        )}
      >
        <h4>Segui gli aggiornamenti in tempo reale</h4>
        <h6>alcuni post del mio profilo instagram </h6>


        <InstaFeed
          token={ig_token}
          counter="12"
          setIsInstagramActive={setIsInstagramActive}
        />
      </div> */}
    </>
  );
}

export default Home;

//https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&&access_token=IGQVJYdXVuWFpGci1VbXlGcXZAwR3JLbGd0Wi1FSXd2cmZAOT0J3djVnMzUwbEFCNUpXLS1vcVM3ZA3cyT3cyd1ZAlZAXU4SVJtVFdUdmJuTF8wc2VvMnh2YlUwQnoxZAmZA1cy1mdTZAEV1VLSk85dlhsTjlMWgZDZD
