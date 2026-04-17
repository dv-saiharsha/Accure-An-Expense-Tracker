import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const isAuthenticated = !!localStorage.getItem('token');

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navStyle = {
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
        padding: scrolled ? '1rem 0' : '2rem 0',
        background: scrolled ? 'rgba(255,255,255,0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #EEE' : 'none',
        transition: '0.4s cubic-bezier(0.19, 1, 0.22, 1)'
    };

    const linkStyle = {
        textDecoration: 'none', color: '#000', fontWeight: 800, fontSize: '0.9rem',
        textTransform: 'uppercase', letterSpacing: '1px', transition: '0.2s'
    };

    return (
        <nav style={navStyle}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                    <Link to="/" style={{ ...linkStyle, fontSize: '1.5rem', letterSpacing: '-1.5px', fontWeight: 950 }}>ACCURE</Link>
                    
                    {!isAuthenticated && (
                        <div style={{ display: 'flex', gap: '2.5rem' }}>
                            <Link to="/" style={linkStyle}>Home</Link>
                            <Link to="/about" style={linkStyle}>About</Link>
                            <Link to="/services" style={linkStyle}>Services</Link>
                            <Link to="/contact" style={linkStyle}>Contact</Link>
                        </div>
                    )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    {isAuthenticated ? (
                        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                            <Link to="/dashboard" style={linkStyle}>Vault</Link>
                            <Link to="/analytics" style={linkStyle}>Intelligence</Link>
                            <button className="btn-primary" style={{ height: '44px', padding: '0 24px', borderRadius: '12px' }} onClick={() => navigate('/add-expense')}>Add Entry</button>
                        </div>
                    ) : (
                        <>
                            <Link to="/login" style={linkStyle}>Sign In</Link>
                            <button className="btn-primary" style={{ height: '48px', padding: '0 28px', borderRadius: '14px' }} onClick={() => navigate('/register')}>Get Started</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
