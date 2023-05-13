import React from 'react';

const BottomNav = () => {
    return (
        <div className="products-detail-bottom-nav">
            <div className="container">
                <div className="wrapper">
                    <div className="item">
                        <i className="fa-regular icon fa-house" />
                        <span className="label">Cửa hàng</span>
                    </div>
                    <div className="item">
                        <i className="fa-regular icon fa-messages" />
                        <span className="label">Tin nhắn</span>
                    </div>
                    <div className="actions">
                        <button className="action -rounded-left">
                            120,000đ
                            <p>Mua thường</p>
                        </button>
                        <button className="action -rounded-right">
                            103,000đ
                            <p>Mua nhóm</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomNav;
