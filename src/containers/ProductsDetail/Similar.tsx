import { map } from 'lodash';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../../components/Card/ProductCard';

const Similar = () => {
    return (
        <div className="products-detail-similar">
            <div className="container">
                <h2 className="section-title">Sản phẩm tương tự</h2>

                <Swiper
                    slidesPerView={2}
                    slidesPerGroupSkip={2}
                    spaceBetween={15}
                >
                    {map(new Array(6), (_, i) => (
                        <SwiperSlide key={`home-feed-product-${i}`}>
                            <ProductCard
                                name="Thực phẩm chức năng AMINO MAGIC 500G Apple"
                                price={800000}
                                rating={3}
                                location="Nước ngoài"
                                sold={1}
                                image="https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/m/a/mac-mini-3_1.jpg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Similar;
