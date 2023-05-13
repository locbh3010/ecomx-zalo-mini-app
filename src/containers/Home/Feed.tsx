import { map } from 'lodash';
import React from 'react';
import { feedTabs } from './constants';
import cn from 'classnames';
import Grid from '@mui/material/Grid';
import ProductCard from '../../components/Card/ProductCard';

const Feed = () => {
    const [active, setActive] = React.useState<number>(0);

    return (
        <div className="home-feed">
            <ul className="feed-tabs">
                {map(feedTabs, (t, i) => (
                    <li
                        className={cn('item', { '-active': active === i })}
                        onClick={() => setActive(i)}
                        key={`home-feed-tab-${i}`}
                    >
                        {t}
                    </li>
                ))}
            </ul>
            <div className="product-list">
                <Grid
                    container
                    spacing="15px"
                >
                    {map(new Array(9), (_, i) => (
                        <Grid
                            item
                            xs={6}
                            key={`home-feed-product-${i}`}
                        >
                            <ProductCard
                                name="Thực phẩm chức năng AMINO MAGIC 500G Apple"
                                price={800000}
                                rating={3}
                                location="Nước ngoài"
                                sold={1}
                                image="https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/m/a/mac-mini-3_1.jpg"
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
};

export default Feed;
