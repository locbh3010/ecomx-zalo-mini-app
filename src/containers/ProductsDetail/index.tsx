import React from 'react';
import BottomNav from './BottomNav';
import Slides from './Slides';
import Information from './Information';
import Store from './Store';
import ProductInformation from './ProductInformation';
import Description from './Description';
import Similar from './Similar';

const ProductsDetail = () => {
    return (
        <div className="products-detail">
            <Slides />
            <Information />
            <Store />
            <ProductInformation />
            <Description />
            <Similar />

            <BottomNav />
        </div>
    );
};

export default ProductsDetail;
