import { map } from 'lodash';
import React from 'react';
import { tabs } from './constants';
import cn from 'classnames';

interface TabsProps {
    onChange: (n: number) => void;
    active: number;
}

const Tabs: React.FC<TabsProps> = ({ onChange, active }) => {
    return (
        <ul className="home-tabs">
            {map(tabs, (t, i) => (
                <li
                    className={cn('item', { '-active': active === i })}
                    key={`home-tab-${i}`}
                >
                    <button
                        className="action"
                        onClick={() => onChange(i)}
                    >
                        {t.label}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Tabs;
