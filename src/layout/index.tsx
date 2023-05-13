import React, { ReactNode } from 'react';
import BottomNav from '../components/BottomNav';
import { createPortal } from 'react-dom';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            <main className="main">{children}</main>
            {createPortal(<BottomNav />, document.body)}
        </div>
    );
};

export default Layout;
