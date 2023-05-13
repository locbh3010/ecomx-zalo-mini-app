import { Avatar } from '@mui/material';
import React from 'react';

const Store = () => {
    return (
        <div className="products-detail-store">
            <div className="container">
                <div className="wrapper">
                    <div className="top">
                        <div className="main-information">
                            <Avatar
                                sx={{ width: 42, height: 42 }}
                                src=""
                            />
                            <div>
                                <h4 className="name">Cửa hàng quần áo</h4>
                                <p className="description">
                                    Cửa hàng <span className="status -online"></span>
                                </p>
                            </div>
                        </div>
                        <button className="action">Theo dõi</button>
                    </div>
                    <div className="bottom"></div>
                </div>
            </div>
        </div>
    );
};

export default Store;
