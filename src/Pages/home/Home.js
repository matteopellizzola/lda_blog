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

function Home (props) {

    const navigate = useNavigate();
    const handleClick = (path) => {
        console.log(path);
        navigate('/' + path);
    };

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
    </>;
}

export default Home;