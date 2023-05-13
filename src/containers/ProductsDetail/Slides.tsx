import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode } from 'swiper';
import { map } from 'lodash';

const images = [
    'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_devicepenfrontl30_phantomwhite_211119.jpg',
    'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_devicepenfrontl30_phantomwhite_211119.jpg',
    'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_devicepenfrontl30_phantomwhite_211119.jpg',
    'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_devicepenfrontl30_phantomwhite_211119.jpg',
    'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_devicepenfrontl30_phantomwhite_211119.jpg',
    'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_devicepenfrontl30_phantomwhite_211119.jpg',
    'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_devicepenfrontl30_phantomwhite_211119.jpg',
    'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/m/sm-s908_galaxys22ultra_devicepenfrontl30_phantomwhite_211119.jpg',
];

const Slides = () => {
    const [activeSlide, setActiveSlide] = useState<any>(null);
    const [slideIndex, setSlideIndex] = useState<number>(0);

    return (
        <div className="products-detail-slides">
            <div className="main">
                <Swiper
                    spaceBetween={10}
                    modules={[FreeMode, Thumbs]}
                    thumbs={{
                        swiper: activeSlide && !activeSlide.destroyed ? activeSlide : null,
                    }}
                    onActiveIndexChange={(i) => setSlideIndex(i.activeIndex)}
                >
                    {map(images, (img, i) => (
                        <SwiperSlide key={`product-detail-slide-main-${i}`}>
                            <div className="slide">
                                <img
                                    src={img}
                                    alt=""
                                    className="image"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="amount">
                    {slideIndex + 1}/{images.length}
                </div>
            </div>
            <div className="thumbnails">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={10}
                    onSwiper={setActiveSlide}
                    watchSlidesProgress
                    freeMode
                    centerInsufficientSlides
                    modules={[FreeMode, Thumbs]}
                >
                    {map(images, (img, i) => (
                        <SwiperSlide key={`product-detail-slide-main-${i}`}>
                            <div className="thumbnail">
                                <img
                                    src={img}
                                    alt=""
                                    className="image"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slides;
