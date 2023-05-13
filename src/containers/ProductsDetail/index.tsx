import React, { useState } from 'react';
import BottomNav from './BottomNav';
import Slides from './Slides';
import Information from './Information';
import Store from './Store';
import ProductInformation from './ProductInformation';
import Description from './Description';
import Similar from './Similar';
import { createPortal } from 'react-dom';

const ProductsDetail = () => {
    return (
        <div className="products-detail">
            <Slides />
            <Information />
            <Store />
            <ProductInformation />
            <Description />
            <Similar />

            {createPortal(<BottomNav />, document.body)}
        </div>
    );
};

export default ProductsDetail;
