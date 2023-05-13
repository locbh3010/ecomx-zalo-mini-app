import React from 'react';

const Information = () => {
    return (
        <div className="products-detail-information">
            <div className="container">
                <div className="wrapper">
                    <p className="price">103.000đ</p>
                    <p className="sold">Đã bán 0</p>
                    <h3 className="name">Lorem ipsum dolor sit amet.</h3>
                    <button className="action">
                        <i className="fa-regular fa-heart" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Information;
