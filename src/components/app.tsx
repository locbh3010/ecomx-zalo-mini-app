import React from 'react';
import { Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { AnimationRoutes, App, SnackbarProvider, ZMPRouter } from 'zmp-ui';
import HomePage from '../pages';
import ProductDetail from '../pages/products-detail';

const MyApp = () => {
    return (
        <RecoilRoot>
            <App>
                <SnackbarProvider>
                    <ZMPRouter>
                        <AnimationRoutes>
                            <Route
                                path="/"
                                element={<HomePage></HomePage>}
                            />
                            <Route
                                path="/products/:id"
                                element={<ProductDetail />}
                            />
                        </AnimationRoutes>
                    </ZMPRouter>
                </SnackbarProvider>
            </App>
        </RecoilRoot>
    );
};
export default MyApp;
