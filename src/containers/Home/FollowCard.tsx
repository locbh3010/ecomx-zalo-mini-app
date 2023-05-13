import { Avatar, Rating } from '@mui/material';
import { map } from 'lodash';
import React from 'react';

const FollowCard = () => {
    return (
        <div className="follow-card">
            <div className="auth">
                <div className="left">
                    <Avatar sx={{ width: 44, height: 44 }} />
                    <div>
                        <h3 className="name">Name Store</h3>
                        <p className="caption">Nhà bán - 123 người theo dõi</p>
                    </div>
                </div>
                <Rating
                    readOnly
                    value={3}
                    size="small"
                />
            </div>
            <div className="posts">
                <p className="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, vero?</p>
                <div className="wrapper">
                    {map(new Array(2), (_, i) => (
                        <div
                            className="post-item"
                            key={`follow-post-${i}`}
                        >
                            <div className="main">
                                <img
                                    src="https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/m/a/mac-mini-3_1.jpg"
                                    alt=""
                                    className="image"
                                />
                            </div>
                            <div className="item">
                                <img
                                    src="https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/m/a/mac-mini-2_1.jpg"
                                    alt=""
                                    className="image"
                                />
                            </div>
                            <div className="item">
                                <img
                                    src="https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/m/a/mac-mini-3_1.jpg"
                                    alt=""
                                    className="image"
                                />
                            </div>
                            <div className="item">
                                <img
                                    src="https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/m/a/mac-mini-4_1.jpg"
                                    alt=""
                                    className="image"
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="product">
                    <div className="thumbnail">
                        <img
                            src="https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/m/a/mac-mini-3_1.jpg"
                            alt=""
                            className="image"
                        />
                    </div>
                    <div>
                        <h5 className="name">Lorem, ipsum dolor.</h5>
                        <p className="price">{Number(225000).toLocaleString('en-US')}đ</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p className="like">123 Lượt thích</p>
                <div className="actions">
                    <i className="fa-heart fa-regular icon" />
                    <i className="fa-regular fa-message icon" />
                    <i className="fa-regular fa-share-nodes icon" />
                </div>
            </div>
        </div>
    );
};

export default FollowCard;
