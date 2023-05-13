import React from 'react';

const BottomNav = () => {
    return (
        <div className="bottom-nav">
            <div className="wrapper">
                <div className="item -active">
                    <i className="fa-regular icon fa-house" />
                    <span className="label">Trang chủ</span>
                </div>
                <div className="item">
                    <i className="fa-regular icon fa-grid-2" />
                    <span className="label">Danh mục</span>
                </div>
                <div className="item">
                    <i className="fa-regular icon fa-badge-percent" />
                    <span className="label">Bán chạy</span>
                </div>
                <div className="item">
                    <i className="fa-regular icon fa-messages" />
                    <span className="label">Tin nhắn</span>
                </div>
                <div className="item">
                    <i className="fa-regular icon fa-user" />
                    <span className="label">Cá nhân</span>
                </div>
            </div>
        </div>
    );
};

export default BottomNav;
