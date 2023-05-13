import React from 'react';

const ProductInformation = () => {
    return (
        <div className="main-information">
            <div className="container">
                <h2 className="section-title">Thông tin sản phẩm</h2>
                <div className="wrapper">
                    <div className="item">
                        <p className="label">Thương hiệu</p>
                        <p className="value">thương hiệu abc</p>
                    </div>
                    <div className="item">
                        <p className="label">Nguồn gốc</p>
                        <p className="value">Việt Nam</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInformation;
