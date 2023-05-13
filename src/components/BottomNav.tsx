import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
    return (
        <div className="bottom-nav">
            <div className="wrapper">
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? 'item -active' : 'item')}
                >
                    <i className="fa-regular icon fa-house" />
                    <span className="label">Trang chủ</span>
                </NavLink>
                <NavLink
                    to="/categories"
                    className={({ isActive }) => (isActive ? 'item -active' : 'item')}
                >
                    <i className="fa-regular icon fa-grid-2" />
                    <span className="label">Danh mục</span>
                </NavLink>
                <NavLink
                    to="/best-seller"
                    className={({ isActive }) => (isActive ? 'item -active' : 'item')}
                >
                    <i className="fa-regular icon fa-badge-percent" />
                    <span className="label">Bán chạy</span>
                </NavLink>
                <NavLink
                    to="/messages"
                    className={({ isActive }) => (isActive ? 'item -active' : 'item')}
                >
                    <i className="fa-regular icon fa-messages" />
                    <span className="label">Tin nhắn</span>
                </NavLink>
                <NavLink
                    to="/user"
                    className={({ isActive }) => (isActive ? 'item -active' : 'item')}
                >
                    <i className="fa-regular icon fa-user" />
                    <span className="label">Cá nhân</span>
                </NavLink>
            </div>
        </div>
    );
};

export default BottomNav;
