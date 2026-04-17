import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const TabBar = () => {
    const location = useLocation();
    const publicPaths = ['/', '/login', '/register'];
    if (publicPaths.includes(location.pathname)) return null;

    const tabs = [
        { path: '/dashboard', icon: 'home', label: 'Home' },
        { path: '/groups', icon: 'groups', label: 'Circles' },
        { path: '/add-expense', icon: 'add_circle', label: 'Add' },
        { path: '/analytics', icon: 'monitoring', label: 'Intel' },
        { path: '/profile', icon: 'person', label: 'Profile' },
    ];

    return (
        <div className="tab-bar">
            {tabs.map(tab => (
                <Link
                    key={tab.path}
                    to={tab.path}
                    className={`tab-item ${location.pathname === tab.path ? 'active' : ''}`}
                >
                    <span className="material-symbols-rounded">{tab.icon}</span>
                    <span>{tab.label}</span>
                </Link>
            ))}
        </div>
    );
};

export default TabBar;
