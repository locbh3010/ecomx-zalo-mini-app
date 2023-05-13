import React, { ReactNode } from 'react';
import BottomNav from '../components/BottomNav';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <main className="main">{children}</main>
            <BottomNav />
        </div>
    );
};

export default Layout;
