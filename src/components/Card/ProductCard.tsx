import React from 'react';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    image: string;
    name: string;
    price: number;
    rating: number;
    location: 'Nước ngoài' | 'Việt Nam';
    sold: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price, rating, location, sold }) => {
    return (
        <div className="product-card">
            <Link
                to="/products/abc"
                className="thumbnail"
            >
                <img
                    src={image}
                    alt=""
                    className="image"
                />
            </Link>
            <div className="body">
                <h3 className="name">
                    <Link to="/products/abc">{name}</Link>
                </h3>
                <div className="meta">
                    <span className="price">{price.toLocaleString('en-US')}đ</span>
                    <div className="rating">
                        <Rating
                            readOnly
                            size="small"
                            value={rating}
                        />
                    </div>
                    <div className="location">
                        <i className="fa-light fa-location-dot" />
                        {location}
                    </div>
                    <p className="sold">Đã bán {sold}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
