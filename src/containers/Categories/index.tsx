import React from 'react';
import Layout from '../../layout';
import Sidebar from './Sidebar';
import Content from './Content';

const Categories = () => {
    return (
        <Layout>
            <div className="categories-page">
                <div className="search-site">
                    <input
                        type="text"
                        className="field"
                        placeholder="Tìm kiếm"
                    />
                </div>

                <div className="wrapper">
                    <Sidebar />
                    <Content />
                </div>
            </div>
        </Layout>
    );
};

export default Categories;
