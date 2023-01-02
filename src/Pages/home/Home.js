// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./home.scss";
import { Link } from 'react-router-dom';

function Home (props) {
    return <>
        <h1>
            home pageeee
        </h1>
        <div className='main-slider'>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation={{ clickable: true}}
                pagination={{ clickable: true }}
                spaceBetween={15}
                slidesPerView={1}
            >
                <SwiperSlide><img src="https://picsum.photos/300/400" alt=''/></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/100/200" alt=''/></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/200/300" alt=''/></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/200/500" alt=''/></SwiperSlide>
            </Swiper>
        </div>
        <div className="dual-boxes">
            <Link className='box-container' to="/about">
                    <img src="https://picsum.photos/600/400" alt=''/>
                    <span className='cta-box'>
                        testo di esempio
                    </span>
            </Link>
            <Link className='box-container' to="/menu">
                <img src="https://picsum.photos/601/401" alt=''/>
                <span className='cta-box'>
                    altro testo di esempio
                </span>
            </Link>
        </div>
    </>;
}

export default Home;