// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay, Lazy } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/lazy';

import "./home.scss";
import { useNavigate } from 'react-router-dom';

import InstagramFeed from 'react-ig-feed';
import 'react-ig-feed/dist/index.css';

function Home (props) {

    const navigate = useNavigate();
    const handleClick = (path) => {
        navigate('/' + path);
    };

    const ig_token = 'IGQVJYdXVuWFpGci1VbXlGcXZAwR3JLbGd0Wi1FSXd2cmZAOT0J3djVnMzUwbEFCNUpXLS1vcVM3ZA3cyT3cyd1ZAlZAXU4SVJtVFdUdmJuTF8wc2VvMnh2YlUwQnoxZAmZA1cy1mdTZAEV1VLSk85dlhsTjlMWgZDZD';

    return <>
        <h1>
            home pageeee
        </h1>
        <div className='main-slider'>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, Lazy]}
                loop={true}
                navigation={{ clickable: true}}
                pagination={{ clickable: true }}
                spaceBetween={15}
                slidesPerView={1}
                lazy={true}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide>
                    <img src="https://picsum.photos/1920/1090" alt='' className='desktop-slide'/>
                    {/* <img src="https://picsum.photos/1080/1920" alt='' className='mobile-slide'/> TODO:*/}
                </SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/1921/1089" alt=''/></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/1922/1090" alt=''/></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/1920/1089" alt=''/></SwiperSlide>
            </Swiper>
        </div>
        <div className="dual-boxes">
            <div className='box-container' onClick={() => handleClick('about')}>
                    <img src="https://picsum.photos/1800/1200" alt=''/>
                    <span className='cta-box'>
                        testo di esempio
                    </span>
            </div>
            <div className='box-container' onClick={() => handleClick('menu')}>
                <img src="https://picsum.photos/1801/1201" alt=''/>
                <span className='cta-box'>
                    altro testo di esempio
                </span>
            </div>
        </div>

        <div className='instagram-container text-center'>
            <h4>Segui gli aggiornamenti in tempo reale</h4>
            <h6>alcuni post del mio profilo instagram </h6>

            <InstagramFeed token={ig_token} counter="12" />
        </div>
    </>;
}

export default Home;

   //https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&&access_token=IGQVJYdXVuWFpGci1VbXlGcXZAwR3JLbGd0Wi1FSXd2cmZAOT0J3djVnMzUwbEFCNUpXLS1vcVM3ZA3cyT3cyd1ZAlZAXU4SVJtVFdUdmJuTF8wc2VvMnh2YlUwQnoxZAmZA1cy1mdTZAEV1VLSk85dlhsTjlMWgZDZD