import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isAuthenticated = !!localStorage.getItem('token');

    // Hide on auth pages with tab bar
    const hiddenPaths = ['/dashboard', '/groups', '/add-expense', '/analytics', '/profile'];
    if (hiddenPaths.includes(location.pathname)) return null;

    const linkStyle = {
        textDecoration: 'none', color: '#000', fontWeight: 800, fontSize: '1.3rem',
        letterSpacing: '-0.5px'
    };

    return (
        <>
            <nav style={{
                position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
                padding: '1rem 0',
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: '#000', fontSize: '1.3rem', fontWeight: 950, letterSpacing: '-1px' }}>
                        ACCURE
                    </Link>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px', zIndex: 1001
                        }}
                    >
                        <span style={{ width: '22px', height: '2px', background: '#000', display: 'block', transition: '0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                        <span style={{ width: '22px', height: '2px', background: '#000', display: 'block', transition: '0.3s', opacity: menuOpen ? 0 : 1 }} />
                        <span style={{ width: '22px', height: '2px', background: '#000', display: 'block', transition: '0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
                    </button>
                </div>
            </nav>

            {menuOpen && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999,
                    background: '#FFF',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.5rem',
                    animation: 'scaleIn 0.25s ease forwards'
                }}>
                    {!isAuthenticated ? (
                        <>
                            <Link to="/" style={linkStyle} onClick={() => setMenuOpen(false)}>Home</Link>
                            <Link to="/login" style={linkStyle} onClick={() => setMenuOpen(false)}>Sign In</Link>
                            <Link to="/register" onClick={() => setMenuOpen(false)}>
                                <button className="btn-primary" style={{ padding: '14px 48px' }}>Get Started</button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/dashboard" style={linkStyle} onClick={() => setMenuOpen(false)}>Vault</Link>
                            <Link to="/analytics" style={linkStyle} onClick={() => setMenuOpen(false)}>Intelligence</Link>
                            <Link to="/add-expense" style={linkStyle} onClick={() => setMenuOpen(false)}>Add Entry</Link>
                            <Link to="/groups" style={linkStyle} onClick={() => setMenuOpen(false)}>Circles</Link>
                            <Link to="/profile" style={linkStyle} onClick={() => setMenuOpen(false)}>Profile</Link>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default MobileNavbar;
