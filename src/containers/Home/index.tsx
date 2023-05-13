import React, { useState } from 'react';
import Layout from '../../layout';
import Tabs from './Tabs';
import { tabs } from './constants';

const Home = () => {
    const [tabActive, setTabActive] = useState<number>(0);

    const handleChangeTab = (n: number) => {
        setTabActive(n);
    };

    return (
        <Layout>
            <Tabs
                onChange={handleChangeTab}
                active={tabActive}
            />
            <div className="container">{tabs[tabActive].component}</div>
        </Layout>
    );
};

export default Home;
