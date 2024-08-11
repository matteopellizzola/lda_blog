
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Lazy, FreeMode, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/lazy';
import 'swiper/css/free-mode';

var styles = {
    instagramItems: "_2R-kh",
    instagramItem: "_wPDyp",
    instagramImg: "_vzTHL",
    instagramIcon: "_3xnQP",
    errorMessage: "_3lhLL",
    wrapper: "_1I_qj",
    placeholder: "_3qwMT",
    hidePlaceholder: "_3rVly",
};

var InstaFeed = function InstagramFeed (props) {
    var token = props.token,
        counter = props.counter;
    var placeholder = React.useRef();

    var [data, setData] = useState([]);
    /* data = _useState[0],
    setData = _useState[1]; */

    var [isLoading, setIsLoading] = useState(false);
    /* var _useState2 = React.useState(false),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1]; */

    var [isError, setIsError] = useState(false);
    /* var _useState3 = React.useState(false),
    isError = _useState3[0],
    setIsError = _useState3[1]; */

    var [showImage, setShowImage] = useState(false);
    /* var _useState4 = React.useState(false),
        showImage = _useState4[0],
        setShowImage = _useState4[1]; */
    var url =
        "https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&&access_token=" +
        token;
    React.useEffect(
        function () {
            var fetchData = function fetchData () {
                try {
                    setIsLoading(true);
                    fetch(url)
                        .then(function (response) {
                            if (!response.ok) {
                                setIsError(true);
                            }
                            return response.json();
                        })
                        .then(function (result) {
                            setData(result.data);
                        })
                    ["catch"](function (error) {
                        return setIsError(true);
                    });
                    setIsLoading(false);
                    return Promise.resolve();
                } catch (e) {
                    return Promise.reject(e);
                }
            };

            fetchData();

            var callback = function callback (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        setShowImage(true);
                    }
                });
            };

            var options = {
                threshold: 1.0,
            };
            var observer = new IntersectionObserver(callback, options);
            observer.observe(placeholder.current);
            return function () {
                return observer.disconnect();
            };
        },
        [url]
    );

    return (
        <div>
            <Swiper
                modules={[Pagination, Autoplay, Lazy, FreeMode, Scrollbar]}
                loop={false}
                /*  scrollbar={{ clickable: true }} */
                /* navigation={{ clickable: true }} */
                pagination={{ clickable: true }}
                spaceBetween={15}
                slidesPerView={4}
                breakpoints={
                    {
                        0: {
                            slidesPerView: 2
                        },
                        576: {
                            slidesPerView: 4
                        }
                    }
                }
                freeMode={true}
                lazy={true}
                autoplay={{ delay: 3000 }}
            /* speed={300} */
            >
                {isLoading ? (
                    <div> Loading... </div>
                ) : isError ? (
                    <div>
                        <p className="errorMessage d-none"> the access token is not valid</p>
                    </div>
                ) : (


                    <div className={styles.instagramItems} ref={placeholder}>
                        {showImage &&
                            data.slice(0, counter).map((item, index) => {
                                return (
                                    <SwiperSlide>
                                        <div key={index} className={styles.instagramItem}>
                                            <a
                                                key={index}
                                                href={item.permalink}
                                                className="ig-instagram-link"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {item.media_type === "IMAGE" ||
                                                    item.media_type === "CAROUSEL_ALBUM" ? (
                                                    <img
                                                        className={styles.instagramImg}
                                                        key={index}
                                                        src={item.media_url}
                                                        alt="description"
                                                    />
                                                ) : (
                                                    <video
                                                        className={styles.instagramImg}
                                                        key={index}
                                                        src={item.media_url}
                                                        alt={item.caption}
                                                        type="video/mp4"
                                                    />
                                                )}
                                                <div className={styles.instagramIcon}>
                                                    <div className="instagram-count-item">
                                                        <span className="icon">
                                                            <svg height="18" viewBox="0 0 512 512" width="18">
                                                                <path
                                                                    fill="currentColor"
                                                                    d="m256 386c-71.683 0-130-58.317-130-130 7.14-172.463 252.886-172.413 260 .001 0 71.682-58.317 129.999-130 129.999zm0-220c-49.626 0-90 40.374-90 90 4.944 119.397 175.074 119.362 180-.001 0-49.625-40.374-89.999-90-89.999zm236 346h-472c-11.046 0-20-8.954-20-20v-472c0-11.046 8.954-20 20-20h472c11.046 0 20 8.954 20 20v472c0 11.046-8.954 20-20 20zm-452-40h432v-432h-432zm372-392c-11.046 0-20 8.954-20 20 0 11.046 8.954 20 20 20 11.046 0 20-8.954 20-20 0-11.046-8.954-20-20-20z"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                    </div>
                )}
            </Swiper>
        </div >
    );
    //return result;
};

export default InstaFeed;
