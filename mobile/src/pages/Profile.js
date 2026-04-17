import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const user = {
        name: 'Harsh Patel',
        email: 'harsh@accure.io',
        role: 'Premium',
        currency: 'USD',
        joined: 'March 2026'
    };

    const menuItems = [
        { icon: 'currency_exchange', label: 'Currency Converter', path: '/dashboard' },
        { icon: 'receipt_long', label: 'Payment History', path: '/dashboard' },
        { icon: 'shield', label: 'Security & Privacy', path: null },
        { icon: 'notifications', label: 'Notifications', path: null },
        { icon: 'help', label: 'Help & Support', path: null },
    ];

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('accure_onboarded');
        navigate('/');
    };

    return (
        <div className="page" style={{ paddingTop: '1.5rem' }}>
            <div className="container">
                <div style={{ marginBottom: '2rem' }}>
                    <span style={{ color: '#276EF1', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.6rem' }}>Settings</span>
                    <h1 style={{ fontSize: '2rem', fontWeight: 950, letterSpacing: '-1.5px', marginTop: '0.2rem' }}>Profile</h1>
                </div>

                {/* Profile Card */}
                <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#FFF', fontWeight: 950, fontSize: '1.3rem' }}>{user.name.charAt(0)}</span>
                    </div>
                    <div>
                        <h3 style={{ fontWeight: 950, fontSize: '1.2rem', marginBottom: '0.15rem' }}>{user.name}</h3>
                        <p style={{ fontSize: '0.8rem', color: '#888', fontWeight: 600 }}>{user.email}</p>
                    </div>
                </div>

                {/* Account Info */}
                <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
                    <h4 style={{ fontWeight: 950, fontSize: '0.95rem', marginBottom: '1.25rem' }}>Account Details</h4>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {[
                            { label: 'Role', value: user.role },
                            { label: 'Base Currency', value: user.currency },
                            { label: 'Member Since', value: user.joined },
                        ].map(item => (
                            <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: '#AAA', fontWeight: 700, fontSize: '0.85rem' }}>{item.label}</span>
                                <span style={{ fontWeight: 900, fontSize: '0.85rem' }}>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Menu */}
                <div className="glass-card" style={{ overflow: 'hidden', marginBottom: '1.5rem' }}>
                    {menuItems.map((item, i) => (
                        <div
                            key={item.label}
                            onClick={() => item.path && navigate(item.path)}
                            style={{
                                padding: '1.1rem 1.5rem',
                                display: 'flex', alignItems: 'center', gap: '1rem',
                                borderBottom: i < menuItems.length - 1 ? '1px solid #F5F5F5' : 'none',
                                cursor: item.path ? 'pointer' : 'default'
                            }}
                        >
                            <span className="material-symbols-rounded" style={{ fontSize: '1.2rem', color: '#888' }}>{item.icon}</span>
                            <span style={{ fontWeight: 800, fontSize: '0.9rem', flex: 1 }}>{item.label}</span>
                            <span className="material-symbols-rounded" style={{ fontSize: '1rem', color: '#CCC' }}>chevron_right</span>
                        </div>
                    ))}
                </div>

                {/* Logout */}
                <button onClick={handleLogout}
                    style={{ width: '100%', padding: '14px', border: '2px solid #E53935', borderRadius: '14px', background: 'transparent', color: '#E53935', fontWeight: 900, fontSize: '0.9rem', cursor: 'pointer' }}>
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default Profile;
