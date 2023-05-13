import React from 'react';
import Feed from './Feed';
import Follow from './Follow';

interface ITab {
    label: string;
    component: React.JSX.Element;
}

export const tabs: ITab[] = [
    {
        label: 'Dành cho bạn',
        component: <Feed />,
    },
    {
        label: 'Đang theo dõi',
        component: <Follow />,
    },
];

export const feedTabs = [
    'Tất cả',
    'Mẹ và Bé',
    'Thực Phẩm',
    'Thời Trang Nữ',
    'Thời Trang Nam',
    'Đồ gia dụng',
    'Văn Phòng Phẩm',
];
